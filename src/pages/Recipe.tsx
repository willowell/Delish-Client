import React from 'react'
import { RouteComponentProps } from '@reach/router'

import Container from 'react-bootstrap/Container'
import MealDetailView from '../components/MealDetailView'

import { useMealDetailQuery } from '../generated/graphql'

interface RecipeProps extends RouteComponentProps {
    recipeID?: string
}

const Recipe: React.FC<RecipeProps> = ({ recipeID }) => {
    //TODO: Use lodash to sanitize the incoming number
    const { data, loading, error } = useMealDetailQuery({ variables: { id: Number(recipeID) } })

    if (loading) return <p>Loading....</p>;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>Not found</p>;

  return (
    <Container>
        <MealDetailView data={data} />
    </Container>
  )
}

export default Recipe