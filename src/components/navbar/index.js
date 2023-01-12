import React from 'react'
import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import styles from "./style.module.scss"

const NavbarMenu = () => {
  return (
    <div className={styles.Container}>

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">MY-PORTFOLIO</Navbar.Brand>
          <Nav className="me-auto , ">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#features">Skills</Nav.Link>
            <Nav.Link href="#pricing">Contents</Nav.Link>
        </Nav>
      </Navbar>
  
    </div>
  )
}
export default NavbarMenu