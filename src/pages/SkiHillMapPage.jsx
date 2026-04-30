import { useMemo, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import wisconsinMap from '../assets/wisconsin.svg'
import pinImage from '../assets/pin.svg'
import HillStats from '../components/HillStats'
import MapPin from '../components/MapPin'
import PageIntro from '../components/PageIntro'
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
        <PageIntro
          title="Wisconsin ski hills on the map"
          description="Hover a pin to preview a hill. Click a pin to keep its card open while you explore."
        />
        <HillStats hills={activeHill ? [activeHill] : skiHills} />

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
            <Card className="ski-map-card shadow-sm">
              <Card.Body>
                {activeHill ? (
                  <>
                    <p className="ski-map-card-label">Selected location</p>
                    <Card.Title as="h2">{activeHill.name}</Card.Title>
                    <Card.Text>{activeHill.description}</Card.Text>
                    <Card.Text>
                      <strong>Distance from Madison:</strong> {activeHill.distanceMiles} miles
                      <br />
                      <strong>Vertical drop:</strong> {activeHill.verticalDropFt} ft
                      <br />
                      <strong>Terrain:</strong> {activeHill.terrainTypes.join(', ')}
                    </Card.Text>
                    <Button
                      href={activeHill.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                    >
                      Visit Website
                    </Button>
                  </>
                ) : (
                  <>
                    <p className="ski-map-card-label">No location selected</p>
                    <Card.Title as="h2">Choose a pin</Card.Title>
                    <Card.Text>
                      Hover over a Wisconsin location pin or click one to lock its details in place.
                    </Card.Text>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default SkiHillMapPage
