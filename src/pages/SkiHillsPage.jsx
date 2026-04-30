import { useMemo, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import HillStats from '../components/HillStats'
import PageIntro from '../components/PageIntro'
import SkiHillCard from '../components/SkiHillCard'
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

  return (
    <Container style={{ padding: '40px 0' }}>
      <PageIntro
        title="Ski Hills"
        description="Filter Wisconsin ski areas by distance, vertical drop, terrain, and name."
      />
      <HillStats hills={filteredHills} />
      <Form className="filter-card mb-4">
        <Row className="g-3 align-items-end">
          <Col xs={12} md={4} lg={3}>
            <Form.Group controlId="searchHill">
              <Form.Label>Search by hill name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type a hill name"
                value={search}
                onChange={event => setSearch(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="distanceMin">
              <Form.Label>Min distance (miles)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                step="1"
                value={distanceMin}
                onChange={event => setDistanceMin(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="distanceMax">
              <Form.Label>Max distance (miles)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                step="1"
                value={distanceMax}
                onChange={event => setDistanceMax(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="verticalMin">
              <Form.Label>Min vertical (ft)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                step="10"
                value={verticalMin}
                onChange={event => setVerticalMin(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="verticalMax">
              <Form.Label>Max vertical (ft)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                step="10"
                value={verticalMax}
                onChange={event => setVerticalMax(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4} lg={3}>
            <Form.Group controlId="sortBy">
              <Form.Label>Sort by</Form.Label>
              <Form.Select value={sortBy} onChange={event => setSortBy(event.target.value)}>
                <option value="distance-asc">Distance: near to far</option>
                <option value="distance-desc">Distance: far to near</option>
                <option value="vertical-desc">Vertical drop: high to low</option>
                <option value="vertical-asc">Vertical drop: low to high</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group controlId="terrainTypes">
              <Form.Label>Terrain types</Form.Label>
              <div className="d-flex flex-wrap gap-3">
                {terrainOptions.map(terrain => (
                  <Form.Check
                    key={terrain}
                    type="checkbox"
                    id={`terrain-${terrain}`}
                    label={terrain}
                    checked={selectedTerrain.includes(terrain)}
                    onChange={() => toggleTerrain(terrain)}
                  />
                ))}
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row>
        {filteredHills.map(hill => (
          <SkiHillCard key={hill.id} hill={hill} />
        ))}
      </Row>
    </Container>
  )
}

export default SkiHillsPage
