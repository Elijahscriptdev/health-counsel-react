import React from "react";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Form,
  FormControl,
  Container
} from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
      <>
    <Navbar className="nav" bg='white' expand='lg'>
      <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
      <Navbar id='basic-navbar-nav'>
        <Nav className='ml nav-links'>
          <Nav.Link className="links" href='#home'>Home</Nav.Link>
          <Nav.Link className="links" href='#link'>About</Nav.Link>
          <Nav.Link className="links" href='#home'>Doctors</Nav.Link>
          <Nav.Link className="links" href='#link'>News</Nav.Link>
          <Nav.Link className="links" href='#home'>Contact</Nav.Link>
          <Nav.Link className="links" href='#link'>Login</Nav.Link>
          <Nav.Link className="links" href='#link'>logout</Nav.Link>
          <Nav.Link className="links" href='#link'>Register</Nav.Link>
          {/* <NavDropdown className="links" title='Dropdown' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar>
    </Navbar>
    </>
  );
};

export default NavBar;
