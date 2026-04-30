import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'

function HomePage() {
  return (
    <Container className="home-panel">
      <PageIntro
        title="Wisconsin Ski Hills"
        description="Discover ski hills across Wisconsin, compare terrain, and plan your next trip from Madison."
        align="center"
      >
        <Button as={Link} to="/ski-hills" variant="primary">Browse Ski Hills</Button>
        <Button as={Link} to="/ski-hill-map" variant="outline-primary">View Map</Button>
      </PageIntro>
    </Container>
  )
}

export default HomePage
