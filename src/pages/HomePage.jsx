import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <Container className="text-center" style={{ padding: '60px 0' }}>
      <h1>Wisconsin Ski Hills</h1>
      <p>Discover the best ski hills in Wisconsin.</p>
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <Button as={Link} to="/ski-hills" variant="primary">Browse Ski Hills</Button>
        <Button as={Link} to="/ski-hill-map" variant="outline-primary">View Map</Button>
      </div>
    </Container>
  )
}

export default HomePage
