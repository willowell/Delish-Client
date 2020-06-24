import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import styled from '@emotion/styled'
import { colors } from '../styles/theme'

import Carousel from 'react-bootstrap/Carousel'
import gql from 'graphql-tag'

// ? Notes for this carousel:
// ? https://alligator.io/css/cropping-images-object-fit/
// ? https://codepen.io/JacobLett/pen/weqOjq?editors=1000

const GET_THREE_RANDOM_MEAL_IMAGES = gql`
    query GetThreeRandomMealImages {
        item1: mealByID(id: 52915) {
            thumbnail
        }
        item2: mealByID(id: 52852) {
            thumbnail
        }
        item3: mealByID(id: 52935) {
            thumbnail
        }
    }
`

const StyledCarousel = styled.div`
    /*
    Removes white gap between slides - chagnge to base color of slide images
    */
    .carousel {
        background: ${colors.accent};
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
        -webkit-text-stroke: 2px ${colors.secondary};
    }
`

export default function HomeCarousel () {
  const { data, loading, error } = useQuery(GET_THREE_RANDOM_MEAL_IMAGES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>ERROR</p>
  if (!data) return <p>Not found</p>

  return (
    <>
      <StyledCarousel>
        <Carousel>
          <Carousel.Item>
            <img src={data.item1.thumbnail} alt='Slide 1' />
            <Carousel.Caption>
              <h1>What's for breakfast?</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={data.item2.thumbnail} alt='Slide 1' />
            <Carousel.Caption>
              <h1>What's for lunch?</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={data.item3.thumbnail} alt='Slide 1' />
            <Carousel.Caption>
              <h1>What's for dinner?</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </StyledCarousel>
    </>
  )
}
