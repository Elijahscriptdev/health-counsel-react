import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar className='nav' bg='white' expand='lg'>
        <Navbar.Brand href='#home'>
          <div className='logo'>
            <img src='/images/logo.png' alt='logo' />
          </div>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
        <Navbar id='basic-navbar-nav'>
          <Nav className='ml nav-links'>
            <Nav className='links' href='#home'>
              <Link to='/'>Home</Link>
            </Nav>
            <Nav className='links' href='#link'>
              About
            </Nav>
            <Nav className='links' href='#home'>
              <Link to='doctors'>Doctors</Link>
            </Nav>
            <Nav className='links' href='#link'>
              News
            </Nav>
            <Nav className='links' href='#home'>
              Contact
            </Nav>
            <Nav className='links' href='#link'>
              <Link to='/patient/login'>Login</Link>
            </Nav>
            <Nav className='links' href='#link'>
              logout
            </Nav>
            <Nav className='links' href='#link'>
              <Link to='/patient/register'>Register</Link>
            </Nav>
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
