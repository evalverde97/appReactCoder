import React from "react";
import { Nav, Navbar, Container, NavDropdown,  } from "react-bootstrap";
import CartWidget from "./CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBarF() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home"><img src="src\components\assets\BAYC#20.jpg"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      
        <Nav className="me-auto">
          <Nav.Link href="#explore">Explore</Nav.Link>
          <Nav.Link href="#">Create</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <NavDropdown title="Profile" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Mis colecciones</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Wallet</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Cerrar sesión</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <CartWidget />
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBarF;