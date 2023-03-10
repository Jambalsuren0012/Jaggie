import React from 'react'
import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import styles from "./style.module.scss"


const NavbarMenu = () => {
  return (
    <div id='Home' className={styles.Container}>
       <Navbar style={{zIndex: 1000 ,padding:12}} collapseOnSelect expand="lg" bg="dark" variant="dark">
     
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#deets">Education</Nav.Link>
            <Nav.Link href="#deets">Work</Nav.Link>
            <Nav.Link href="#deets">Experiences</Nav.Link>
            <Nav.Link href="#deets">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
  
    </div>
  )
}
export default NavbarMenu