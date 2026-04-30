import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NavigationBar() {
  return (
    <Navbar className="site-navbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">WI Ski Hills</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/ski-hills">Ski Hills</Nav.Link>
            <Nav.Link as={NavLink} to="/ski-hill-map">Map</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
