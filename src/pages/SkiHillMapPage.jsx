import { useMemo, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import wisconsinMap from '../assets/wisconsin.svg'
import pinImage from '../assets/pin.svg'
import MapPin from '../components/MapPin'
import PageHeader from '../components/PageHeader'
import SkiMapDetailsCard from '../components/SkiMapDetailsCard'
import StatsStrip from '../components/StatsStrip'
import { skiHills } from '../data/skiHills'

const mapStageStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: '680px',
  aspectRatio: '723 / 774',
  margin: '0 auto',
}

const mapImageStyle = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  display: 'block',
}

const mapOverlayStyle = {
  position: 'absolute',
  inset: 0,
  zIndex: 2,
}

function SkiHillMapPage() {
  const [selectedId, setSelectedId] = useState(null)
  const [lockedId, setLockedId] = useState(null)

  const activeHill = useMemo(() => {
    return skiHills.find(hill => hill.id === selectedId) ?? null
  }, [selectedId])

  const handlePinEnter = hillId => {
    if (lockedId === null) {
      setSelectedId(hillId)
    }
  }

  const handlePinLeave = () => {
    if (lockedId === null) {
      setSelectedId(null)
    }
  }

  const handlePinClick = hillId => {
    if (lockedId === hillId) {
      setLockedId(null)
      setSelectedId(null)
      return
    }

    setLockedId(hillId)
    setSelectedId(hillId)
  }

  return (
    <main className="ski-map-page">
      <Container>
        <PageHeader
          eyebrow="Map"
          title="Wisconsin ski hills on the map"
          description="Use the pin map to see how each hill is spread across the state."
        />
        <StatsStrip
          stats={[
            { value: skiHills.length, label: 'map pins' },
            { value: `${Math.max(...skiHills.map(hill => hill.verticalDropFt))} ft`, label: 'top vertical' },
            { value: activeHill ? activeHill.name : 'None', label: 'selected hill' },
          ]}
        />

        <Row className="g-4 align-items-start">
          <Col lg={8}>
            <section
              className="ski-map-board"
              aria-label="Map of Wisconsin with ski hill locations"
              onMouseLeave={handlePinLeave}
            >
              <div style={mapStageStyle}>
                <img src={wisconsinMap} alt="Map of Wisconsin" style={mapImageStyle} />
                <div style={mapOverlayStyle}>
                  {skiHills.map(hill => {
                    return (
                      <MapPin
                        key={hill.id}
                        hill={hill}
                        isLocked={lockedId === hill.id}
                        pinImage={pinImage}
                        onMouseEnter={() => handlePinEnter(hill.id)}
                        onFocus={() => setSelectedId(hill.id)}
                        onBlur={() => {
                          if (lockedId === null) {
                            setSelectedId(null)
                          }
                        }}
                        onClick={() => handlePinClick(hill.id)}
                      />
                    )
                  })}
                </div>
              </div>
            </section>
          </Col>

          <Col lg={4}>
            <SkiMapDetailsCard hill={activeHill} />
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default SkiHillMapPage
