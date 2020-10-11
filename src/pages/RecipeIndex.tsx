import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'

import SearchForm from '../components/SearchForm'

import Container from 'react-bootstrap/Container'
import ItemCardGrid from '../components/ItemCardGrid'
import { useSearchForMealsLazyQuery } from '../gen/graphql'
import MealDebugTable from '../components/MealDebugTable'
import Error from '../components/Error'
import Loading from '../components/Loading'

// ? From https://www.apollographql.com/blog/apollo-client-react-how-to-query-on-click-c1d4fecf9b66/
/*
  The idea here is to use the lazy version of a query and trigger it with a function.
  In my case, this means using the query below, and triggering it with getSearchResults().
*/

const RecipeIndex: React.FC<RouteComponentProps> = (props) => {
  const [term, setTerm] = useState('')
  const [currentTerm, setCurrentTerm] = useState('')
  const [getSearchResults, { loading, data, error }] = useSearchForMealsLazyQuery(
    { variables: { str: term } }
  )

  // It seems enabling the first two causes my search form to be a bit too eager!
  // TODO: Perhaps there is a way to update the search results ONLY when the user presses submit?
  if (loading) return <Loading />
  if (error) return <Error error={ error } />
  // IGNORE if (!data) return <p>Not found!</p>

  return (
    <Container>
      <h1>Here's the index for the recipes page!</h1>
      <SearchForm
        targetValue={ currentTerm }
        placeholderValue='Chicken'
        handleSubmit={ 
          (event) => {
            setTerm(currentTerm)
            getSearchResults()
          }
        }
        handleChange={ 
          (event: any) => setCurrentTerm(event.target.value) 
        }
      />
      <ItemCardGrid data={ data } />
      <MealDebugTable data={ data } />

    </Container>
  )
}

export default RecipeIndex
