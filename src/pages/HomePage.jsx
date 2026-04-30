import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import PageHeader from '../components/PageHeader'
import StatsStrip from '../components/StatsStrip'
import { skiHills } from '../data/skiHills'

function HomePage() {
  const highestVertical = Math.max(...skiHills.map(hill => hill.verticalDropFt))

  return (
    <main>
      <section className="home-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(8, 27, 43, 0.88), rgba(8, 27, 43, 0.36)), url(${heroImage})` }}>
        <Container>
          <PageHeader
            eyebrow="Wisconsin Snow Guide"
            title="Wisconsin Ski Hills"
            description="Find ski areas across the state, compare terrain, and use the map to plan a better winter day trip."
            align="light"
            actions={(
              <>
                <Button as={Link} to="/ski-hills" variant="primary">Browse Ski Hills</Button>
                <Button as={Link} to="/ski-hill-map" variant="outline-light">View Map</Button>
              </>
            )}
          />
        </Container>
      </section>
      <Container className="home-summary">
        <StatsStrip
          stats={[
            { value: skiHills.length, label: 'Wisconsin hills' },
            { value: `${highestVertical} ft`, label: 'largest vertical' },
            { value: 'Map', label: 'location view' },
          ]}
        />
      </Container>
    </main>
  )
}

export default HomePage
