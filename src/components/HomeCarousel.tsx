import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/theme'

import Carousel from 'react-bootstrap/Carousel'

import omelette from '../assets/52915-french-omelette.jpg'
import tuna from '../assets/52852-tuna-nicoise.jpg'
import steak from '../assets/52935-steak-diane.jpg'

// ? Notes for this carousel:
// ? https://alligator.io/css/cropping-images-object-fit/
// ? https://codepen.io/JacobLett/pen/weqOjq?editors=1000

const StyledCarousel = styled.div`
    /*
    Removes white gap between slides - chagnge to base color of slide images
    */
    .carousel {
        background: ${colors.primary.dark};
    }

    /*
    Forces image to be 100% width and not max width of 100%
    */
    .carousel-item img {
        object-fit: cover;
        width: 100%;
        max-height: 500px;
    }

    /* 
    anchors are inline so you need to make them block to go full width
    */
    .carousel-item a h1 {
        display: block;
        width: 100%;
    }

    .carousel-caption {
        font-family: Mogra;
        font-weight: bold;
        color: white;
        -webkit-text-stroke: 2px ${colors.primary.main};
    }
`

const HomeCarousel: React.FC = () => {
  return (
    <StyledCarousel>
      <Carousel>
        <Carousel.Item>
          <img src={omelette} alt='Slide 1' />
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
    </StyledCarousel>
  )
}

export default HomeCarousel
