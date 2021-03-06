import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Container from 'react-bootstrap/Container'

const Recipes: React.FC<RouteComponentProps> = (props) => {
  return (
    <Container>
      { props.children }
    </Container>
  )
}

export default Recipes
