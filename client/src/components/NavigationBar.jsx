import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function NavigationBar() {
  return (
    <div className="navigation-bar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">The Debate Room</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Features</Nav.Link>
            <Nav.Link href="/">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">Register</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar;
