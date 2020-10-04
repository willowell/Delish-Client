import React from 'react'
import styled from '@emotion/styled'
import { RouteComponentProps } from '@reach/router'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import Logo from '../components/Logo'
import TextContainer from '../components/TextContainer'

import cheesecake from '../assets/52833-salted-caramel-cheesecake.jpg'
import shakshuka from '../assets/52963-shakshuka.jpg'

const StyledAbout = styled.div`
    about-image {
        object-fit: cover;
        width: 50vw;
        max-height: 50vh;
    }
`

const About: React.FC<RouteComponentProps> = (props) => {
  return (
    <StyledAbout>
      <Container>
        <TextContainer>
          <div className='label'>Welcome to DELISH!</div>
        </TextContainer>
        <Row>
          <Col>
            <TextContainer>
              <div className='emphasis-big center'>Ever been too hungry to make up your mind about dinner?</div>
            </TextContainer>
          </Col>
          <Col>
            <Image src={cheesecake} rounded fluid/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src={shakshuka} rounded fluid/>
          </Col>
          <Col>
            <TextContainer>
              <div className='emphasis-big center'>Ever felt overwhelmed by all the options on other recipe websites?</div>
            </TextContainer>
          </Col>
        </Row>
        <TextContainer>
          <p className='emphasis-big'>Look no further!</p>
          <p className='emphasis-big'>We're here to offer you a curated list of excellent recipes!</p>
          <p className='emphasis-big'>You have our promise: every dish here is</p>
          <p className='label'>DELISH !</p>
        </TextContainer>
        <Logo/>
      </Container>
    </StyledAbout>
  )
}

export default About
