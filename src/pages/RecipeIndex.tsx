import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { RouteComponentProps } from '@reach/router'

import SearchForm from '../components/SearchForm'

import Container from 'react-bootstrap/Container'
import ItemCardGrid from '../components/ItemCardGrid'
import { useSearchForMealsLazyQuery } from '../gen/graphql'

const RecipeIndex: React.FC<RouteComponentProps> = (props) => {
  const [term, setTerm] = useState('')
  const [getSearchResults, { loading, data, error }] = useSearchForMealsLazyQuery(
    { variables: { str: term } }
  )

  const handleSubmit: FormEventHandler<any> = (event) => {
    event.preventDefault()
    getSearchResults()
  }

  const handleChange: ChangeEventHandler<any> = (event) => setTerm(event.target.value)

  // It seems enabling the first two causes my search form to be a bit too eager!
  // TODO: Perhaps there is a way to update the search results ONLY when the user presses submit?
  // if (loading) return <p>Loading...</p>
  // if (error) return <p>ERROR: { error.message }</p>
  // IGNORE if (!data) return <p>Not found!</p>

  return (
    <Container>
      <h1>Here's the index for the recipes page!</h1>
      <SearchForm
        targetValue={ term }
        placeholderValue="Chicken"
        handleSubmit={ handleSubmit }
        handleChange={ handleChange }
      />
      <ItemCardGrid data={ data } />

    </Container>
  )
}

export default RecipeIndex
