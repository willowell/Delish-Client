import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { RouteComponentProps } from '@reach/router'

import SearchForm from '../components/SearchForm'

import Container from 'react-bootstrap/Container'
import ItemCardGrid from '../components/ItemCardGrid'
import { useSearchForMealsLazyQuery } from '../gen/graphql'
import Error from '../components/Error'
import Loading from '../components/Loading'
import { useStateWithLocalStorage } from '../lib/hooks'

// ? From https://www.apollographql.com/blog/apollo-client-react-how-to-query-on-click-c1d4fecf9b66/
/*
  The idea here is to use the lazy version of a query and trigger it with a function.
  In my case, this means using the query below, and triggering it with getSearchResults().
*/

const RecipeIndex: React.FC<RouteComponentProps> = (props) => {
  const [term, setTerm] = useState('')
  const [currentTerm, setCurrentTerm] = useState('')
  const [lastTerm, setLastTerm] = useStateWithLocalStorage('lastTerm')
  const [timesSearched, setTimesSearched] = useState(0)

  const [getSearchResults, { loading, data, error }] = useSearchForMealsLazyQuery(
    { variables: { str: term } }
  )

  const handleSubmit: FormEventHandler<any> = (event) => {
    event.preventDefault()
    // Set the search term to either the last term or the current term,
    // whichever is not falsy.
    const chooseTerm = () => {
      if (lastTerm !== '') {
        return lastTerm
      } else if (currentTerm !== '') {
        return currentTerm
      } else {
        return ''
      }
    }

    setTerm(chooseTerm())
    getSearchResults()
    setTimesSearched(timesSearched + 1)
  }

  const handleChange: ChangeEventHandler<any> = (event) => {
    // Set both the last term and the current term.
    setLastTerm(event.target.value)
    setCurrentTerm(event.target.value)
  }

  const ResultsResponse = () => {
    console.log(timesSearched)

    return (timesSearched <= 0) ? <h1>Enter something!</h1> : <h1>No results!</h1>
  }

  const Results = () => {
    // if the data is okay and there are results,
    // then display the data.
    // Otherwise, render a message instead based on how many times
    // the user has searched something.
    if (data?.mealsByArbitraryString?.length !== undefined && data?.mealsByArbitraryString?.length > 0) {
      return <ItemCardGrid data={ data } />
    } else {
      return <ResultsResponse />
    }
  }

  // Bail out and render the error.
  if (error !== undefined) {
    return <Error error={ error } />
  }

  // The placeholder is either the last term from local storage
  // or 'Chicken' if the last term is empty.
  return (
    <Container>
      <h1>Let's get cooking!</h1>
      <SearchForm
        placeholderValue={ (lastTerm !== '') ? lastTerm : 'Chicken' }
        handleSubmit={ handleSubmit }
        handleChange={ handleChange }
        targetValue={ currentTerm }
      />
      { loading ? <Loading /> : <Results /> }
    </Container>
  )
}

export default RecipeIndex
