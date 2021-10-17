import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {

  const userLoggedIn = localStorage.getItem("user_details");

  return (
    <div className="navigation-bar">
      <Navbar collapseOnSelect expand="lg" variant="dark" style={{background: "black"}}>
        <Container>
        <Navbar.Brand href="/chat">Live Chat Room</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"></Nav.Link>
            <Nav.Link href="/"></Nav.Link>
          </Nav>
          {userLoggedIn ?
            <Nav>
              <Nav.Link href="/" onClick={() => localStorage.clear()}>Logout</Nav.Link>
            </Nav>
            :
            <Nav>
              <Nav.Link href="/">Join for free!</Nav.Link>
            </Nav>
          }
          {/* <Nav>
            <Nav.Link href="/">Register</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar;
