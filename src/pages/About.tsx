import React from 'react'
import { RouteComponentProps } from '@reach/router'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import logo from '../assets/Delish_200x200.png'
import cheesecake from '../assets/52833-salted-caramel-cheesecake.jpg'
import shakshuka from '../assets/52963-shakshuka.jpg'

const About: React.FC<RouteComponentProps> = (props) => {
  return (
    <Container className='text-container' fluid>
      <h1 className='py-3'>Welcome to DELISH!</h1>
      <Row className='justify-content-md-center'>
        <Col className='my-auto'>
          <h3 className='mx-auto'>Ever been too hungry to make up your mind about dinner?</h3>
        </Col>
        <Col className='my-auto'>
          <Image src={cheesecake} className='d-block' rounded fluid/>
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col className='my-auto'>
          <Image src={shakshuka} className='d-block' rounded fluid/>
        </Col>
        <Col className='my-auto'>
          <h3 className='mx-auto'>Ever felt overwhelmed by all the options on other recipe websites?</h3>
        </Col>
      </Row>
      <Row className='justify-content-md-center pb-5'>
        <Col className='py-3'>
          <h3>Look no further!</h3>
          <h4>We're here to offer you a curated list of excellent recipes!</h4>
          <h4>You have our promise: every dish here is</h4>
          <h1>DELISH !</h1>
          <Image src={logo} className='d-block mx-auto pb-5'/>
        </Col>
      </Row>
    </Container>
  )
}

export default About
