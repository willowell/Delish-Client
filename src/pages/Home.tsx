import React from 'react'
import { RouteComponentProps } from '@reach/router'

import HomeCarousel from '../components/HomeCarousel'

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <HomeCarousel />
  )
}

export default Home
