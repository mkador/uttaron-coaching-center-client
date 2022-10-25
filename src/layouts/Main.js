import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Shared/Footer/Footer'
import Header from '../pages/Shared/Header/Header'
import LeftSideNavBar from '../pages/Shared/LeftSideNavBar/LeftSideNavBar'

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="5" className="d-none d-lg-block">
            <LeftSideNavBar></LeftSideNavBar>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Main
