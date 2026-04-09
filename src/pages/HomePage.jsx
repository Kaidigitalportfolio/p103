import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <Container className="text-center" style={{ padding: '60px 0' }}>
      <h1>Wisconsin Ski Hills</h1>
      <p>Discover the best ski hills in Wisconsin.</p>
      <Button as={Link} to="/ski-hills" variant="primary">Browse Ski Hills</Button>
    </Container>
  )
}

export default HomePage