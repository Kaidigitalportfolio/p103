import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import { skiHills } from '../data/skiHills'

function HomePage() {
  const featuredHills = skiHills.slice(0, 3)
  const highestVertical = Math.max(...skiHills.map(hill => hill.verticalDropFt))
  const nearestHill = skiHills.reduce((nearest, hill) => {
    return hill.distanceMiles < nearest.distanceMiles ? hill : nearest
  }, skiHills[0])

  return (
    <main className="home-page">
      <section className="home-hero-section">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <PageIntro
                title="Wisconsin Ski Hills"
                description="Compare ski areas around Wisconsin, check distance from Madison, and use the map to plan your next winter day trip."
              >
                <Button as={Link} to="/ski-hills" variant="primary">Browse Ski Hills</Button>
                <Button as={Link} to="/ski-hill-map" variant="outline-primary">View Map</Button>
              </PageIntro>
            </Col>
            <Col lg={5}>
              <div className="home-feature-panel">
                <span className="home-feature-label">Trip snapshot</span>
                <div className="home-feature-grid">
                  <div>
                    <strong>{skiHills.length}</strong>
                    <span>hills listed</span>
                  </div>
                  <div>
                    <strong>{highestVertical} ft</strong>
                    <span>largest vertical</span>
                  </div>
                  <div>
                    <strong>{nearestHill.distanceMiles} mi</strong>
                    <span>nearest hill</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="home-featured-section">
        <div className="home-section-heading">
          <h2>Featured ski hills</h2>
          <Button as={Link} to="/ski-hills" variant="outline-primary" size="sm">See all hills</Button>
        </div>
        <Row className="g-4">
          {featuredHills.map(hill => (
            <Col md={4} key={hill.id}>
              <article className="home-featured-card">
                <img
                  src={`${import.meta.env.BASE_URL}ski-hills/${hill.imageFile}`}
                  alt={`${hill.name} ski hill`}
                />
                <div>
                  <h3>{hill.name}</h3>
                  <p>{hill.distanceMiles} miles from Madison · {hill.verticalDropFt} ft vertical</p>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  )
}

export default HomePage
