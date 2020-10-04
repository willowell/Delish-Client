import React from 'react'
import { RouteComponentProps } from '@reach/router'

import Container from 'react-bootstrap/Container'

import HomeCarousel from '../components/HomeCarousel'

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <Container>
      <Container>
        <HomeCarousel />
      </Container>
    </Container>
  )
}

export default Home
