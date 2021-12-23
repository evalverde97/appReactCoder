import React from "react";
import { Nav, Navbar, Container, NavDropdown,  } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";



function NavBarF() {
    return (
    <Navbar expand='lg' bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">NoFungibleShop</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      
        <Nav className="me-auto">
          <Nav.Link href="#explore"><NavLink to="/explore">Explore</NavLink></Nav.Link>
          <Nav.Link href="#"><NavLink to="/create">Create</NavLink></Nav.Link>
          <Nav.Link href="#"><NavLink to="/about">About</NavLink></Nav.Link>
        </Nav>
        <Nav>
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