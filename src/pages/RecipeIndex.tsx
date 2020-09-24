import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Container from 'react-bootstrap/Container'

const RecipeIndex: React.FC<RouteComponentProps> = (props) => {
  return (
    <Container>
        <p>Here's the index for the recipes page!</p>
    </Container>
  )
}

export default RecipeIndex