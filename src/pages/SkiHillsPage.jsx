import { useMemo, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import PageHeader from '../components/PageHeader'
import SkiHillCard from '../components/SkiHillCard'
import SkiHillFilters from '../components/SkiHillFilters'
import StatsStrip from '../components/StatsStrip'
import { skiHills } from '../data/skiHills'

function SkiHillsPage() {
  const [search, setSearch] = useState('')
  const [distanceMin, setDistanceMin] = useState('')
  const [distanceMax, setDistanceMax] = useState('')
  const [verticalMin, setVerticalMin] = useState('')
  const [verticalMax, setVerticalMax] = useState('')
  const [selectedTerrain, setSelectedTerrain] = useState([])
  const [sortBy, setSortBy] = useState('distance-asc')

  const terrainOptions = useMemo(() => {
    const all = new Set()
    skiHills.forEach(hill => hill.terrainTypes.forEach(t => all.add(t)))
    return Array.from(all).sort()
  }, [])

  const filteredHills = useMemo(() => {
    const minDistance = distanceMin === '' ? null : Number(distanceMin)
    const maxDistance = distanceMax === '' ? null : Number(distanceMax)
    const minVertical = verticalMin === '' ? null : Number(verticalMin)
    const maxVertical = verticalMax === '' ? null : Number(verticalMax)
    const searchLower = search.trim().toLowerCase()

    const matches = skiHills.filter(hill => {
      if (searchLower && !hill.name.toLowerCase().includes(searchLower)) {
        return false
      }
      if (minDistance !== null && hill.distanceMiles < minDistance) {
        return false
      }
      if (maxDistance !== null && hill.distanceMiles > maxDistance) {
        return false
      }
      if (minVertical !== null && hill.verticalDropFt < minVertical) {
        return false
      }
      if (maxVertical !== null && hill.verticalDropFt > maxVertical) {
        return false
      }
      if (selectedTerrain.length > 0) {
        const hasTerrain = selectedTerrain.some(t => hill.terrainTypes.includes(t))
        if (!hasTerrain) return false
      }
      return true
    })

    const sorted = [...matches]
    sorted.sort((a, b) => {
      switch (sortBy) {
        case 'distance-desc':
          return b.distanceMiles - a.distanceMiles
        case 'vertical-asc':
          return a.verticalDropFt - b.verticalDropFt
        case 'vertical-desc':
          return b.verticalDropFt - a.verticalDropFt
        case 'name-asc':
          return a.name.localeCompare(b.name)
        case 'name-desc':
          return b.name.localeCompare(a.name)
        case 'distance-asc':
        default:
          return a.distanceMiles - b.distanceMiles
      }
    })

    return sorted
  }, [distanceMax, distanceMin, search, selectedTerrain, sortBy, verticalMax, verticalMin])

  const toggleTerrain = terrain => {
    setSelectedTerrain(current => {
      if (current.includes(terrain)) {
        return current.filter(t => t !== terrain)
      }
      return [...current, terrain]
    })
  }

  const highestVertical = Math.max(...skiHills.map(hill => hill.verticalDropFt))
  const terrainCount = terrainOptions.length

  return (
    <Container className="page-shell">
      <PageHeader
        eyebrow="Explore"
        title="Ski Hills"
        description="Compare Wisconsin ski areas by distance, vertical drop, and terrain before picking your next stop."
      />
      <StatsStrip
        stats={[
          { value: skiHills.length, label: 'hills listed' },
          { value: `${highestVertical} ft`, label: 'largest vertical' },
          { value: terrainCount, label: 'terrain types' },
          { value: filteredHills.length, label: 'current matches' },
        ]}
      />
      <SkiHillFilters
        search={search}
        setSearch={setSearch}
        distanceMin={distanceMin}
        setDistanceMin={setDistanceMin}
        distanceMax={distanceMax}
        setDistanceMax={setDistanceMax}
        verticalMin={verticalMin}
        setVerticalMin={setVerticalMin}
        verticalMax={verticalMax}
        setVerticalMax={setVerticalMax}
        selectedTerrain={selectedTerrain}
        terrainOptions={terrainOptions}
        toggleTerrain={toggleTerrain}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Row className="hill-grid">
        {filteredHills.map(hill => (
          <SkiHillCard key={hill.id} hill={hill} />
        ))}
      </Row>
    </Container>
  )
}

export default SkiHillsPage
