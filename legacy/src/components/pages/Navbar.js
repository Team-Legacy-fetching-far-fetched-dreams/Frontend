import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../imgs/logo2.png'
import './Navbar.css'


const NavBar = () => {
  return (
    <Navbar variant="light" className="nav">
        <Container className='nav-container'>
        <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="LHC logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"  className='home'>Home</Nav.Link>
            <Nav.Link href="/AboutUs" className='about'>AboutUs</Nav.Link>
            <Nav.Link href="/ContactUs" className='contact'>ContactUs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar