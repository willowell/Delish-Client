import React from 'react'
import { RouteComponentProps } from '@reach/router'

import Container from 'react-bootstrap/Container'

import Error from '../components/Error'
import Loading from '../components/Loading'
import MealDetailView from '../components/MealDetailView'

import { useMealDetailQuery } from '../gen/graphql'

interface RecipeProps extends RouteComponentProps {
  recipeID?: string
}

const Recipe: React.FC<RecipeProps> = ({ recipeID }) => {
  // TODO: Use lodash to sanitize the incoming number
  // For instance, I can just put in "asfasfsd" in the URL and cause this component
  // to error out!
  const { data, loading, error } = useMealDetailQuery({ variables: { id: Number(recipeID) } })

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (!data) return <p>Not found</p>

  return (
    <Container>
      { data ? <MealDetailView data={data} /> : <p>Hmm...</p> }
    </Container>
  )
}

export default Recipe
