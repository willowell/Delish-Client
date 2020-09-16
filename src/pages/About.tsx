import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Container from 'react-bootstrap/Container'
import TextContainer from '../components/TextContainer'

export default function About (props: RouteComponentProps) {
  return (
    <Container>
      <TextContainer>
        <h1 className="label">Welcome to DELISH !</h1>
        <p>
          Ever been hungry, but couldn't make up your mind about what to do for dinner?
          And then you go to Allrecipes, and end up spending hours just trying to decide on something?
        </p>
        <p>
          Look no further! We're here to offer you a curated list of excellent, delicious recipes!
          You can trust that any recipe you find here will be
          <p className="emphasis">DELISH !</p>
        </p>
      </TextContainer>
    </Container>
  )
}
