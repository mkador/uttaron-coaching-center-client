import React, { useContext } from 'react'
import { Button, Image } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/uttaron-logo.svg'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider'
import { FaUser, IconName } from 'react-icons/fa'

const Header = () => {
  const { user } = useContext(AuthContext)
  return (
    <Navbar container collapseOnSelect expand="lg" bg="info" variant="">
      <Container>
        <img
          src={logo}
          alt=""
          width="70"
          height="70"
          className="d-inline-block align-top"
        />
        <Navbar.Brand className="font-monospace fw-bold fs-4">
          Uttaron Coaching Center
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="me-3" to="/courses">
              <Button variant="secondary">COURSES</Button>
            </Link>
            <Link className="me-3" to="/blog">
              <Button variant="secondary">BLOG</Button>
            </Link>
            <Link className="me-3" to="/faq">
              <Button variant="secondary">FAQ</Button>
            </Link>
          </Nav>
          <Nav>
            <Nav.Link className="me-3" href="#deets">
              {user?.displayName}
            </Nav.Link>
          </Nav>
          <Nav>
            <Link className="me-3" to="/login">
              <Button variant="secondary">LOGIN</Button>
            </Link>
            <Link className="me-3" to="/register">
              <Button variant="secondary">REGISTER</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
