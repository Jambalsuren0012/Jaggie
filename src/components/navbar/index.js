import React from 'react'
import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import styles from "./style.module.scss"


const NavbarMenu = () => {
  return (
    <div className={styles.Container}>
       <Navbar style={{zIndex: 1000}} collapseOnSelect expand="lg" bg="dark" variant="dark">
     
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">about</Nav.Link>
            <Nav.Link href="#deets">about</Nav.Link>
            <Nav.Link href="#deets">about</Nav.Link>
            <Nav.Link href="#deets">about</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
  
    </div>
  )
}
export default NavbarMenu