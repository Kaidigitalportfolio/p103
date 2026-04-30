import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { skiHills } from '../data/skiHills'

function HomeStat({ value, label }) {
  return (
    <div className="home-stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

function HomeFeature({ title, description }) {
  return (
    <Card className="home-feature h-100">
      <Card.Body>
        <Card.Title as="h2">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

function FeaturedHill({ hill }) {
  const imageSrc = `${import.meta.env.BASE_URL}ski-hills/${hill.imageFile}`

  return (
    <Card className="home-photo-card">
      <Card.Img src={imageSrc} alt={`${hill.name} ski hill`} />
      <Card.Body>
        <Badge bg="primary">Featured hill</Badge>
        <Card.Title as="h2">{hill.name}</Card.Title>
        <Card.Text>{hill.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

function HomePage() {
  const closestHill = skiHills.reduce((closest, hill) => {
    return hill.distanceMiles < closest.distanceMiles ? hill : closest
  }, skiHills[0])

  const tallestHill = skiHills.reduce((tallest, hill) => {
    return hill.verticalDropFt > tallest.verticalDropFt ? hill : tallest
  }, skiHills[0])

  return (
    <Container className="home-panel">
      <Row className="align-items-center g-4">
        <Col lg={7}>
          <p className="home-eyebrow">Plan a Wisconsin ski day</p>
          <h1>Find the right ski hill before you leave Madison.</h1>
          <p className="home-lead">
            Compare distance, vertical drop, terrain, and map locations for Wisconsin ski areas.
          </p>
          <div className="home-actions">
            <Button as={Link} to="/ski-hills" variant="primary">Browse Ski Hills</Button>
            <Button as={Link} to="/ski-hill-map" variant="outline-primary">View Map</Button>
          </div>
          <div className="home-stats">
            <HomeStat value={skiHills.length} label="ski hills" />
            <HomeStat value={`${closestHill.distanceMiles} mi`} label="closest option" />
            <HomeStat value={`${tallestHill.verticalDropFt} ft`} label="biggest vertical" />
          </div>
        </Col>
        <Col lg={5}>
          <FeaturedHill hill={tallestHill} />
        </Col>
      </Row>

      <Row className="g-3 home-feature-row">
        <Col md={4}>
          <HomeFeature
            title="Compare faster"
            description="Use filters to narrow hills by distance, vertical drop, terrain, and name."
          />
        </Col>
        <Col md={4}>
          <HomeFeature
            title="See the spread"
            description="Use the map to preview where each hill sits across Wisconsin."
          />
        </Col>
        <Col md={4}>
          <HomeFeature
            title="Pick your trip"
            description="Open each hill's website when you are ready to check current details."
          />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
