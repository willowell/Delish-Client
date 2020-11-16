import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

import omelette from '../assets/52915-french-omelette.jpg'
import tuna from '../assets/52852-tuna-nicoise.jpg'
import steak from '../assets/52935-steak-diane.jpg'

// ? Notes for this carousel:
// ? https://alligator.io/css/cropping-images-object-fit/
// ? https://codepen.io/JacobLett/pen/weqOjq?editors=1000

const HomeCarousel: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={omelette} alt='Slide 1'/>
        <Carousel.Caption>
          <h1>What's for breakfast?</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={tuna} alt='Slide 1' />
        <Carousel.Caption>
          <h1>What's for lunch?</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={steak} alt='Slide 1' />
        <Carousel.Caption>
          <h1>What's for dinner?</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeCarousel
