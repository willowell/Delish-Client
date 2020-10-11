import React, { ChangeEventHandler, FormEventHandler, useEffect, useRef, useState } from 'react'
import { RouteComponentProps } from '@reach/router'

import SearchForm from '../components/SearchForm'

import Container from 'react-bootstrap/Container'
import ItemCardGrid from '../components/ItemCardGrid'
import { useSearchForMealsLazyQuery } from '../gen/graphql'
import MealDebugTable from '../components/MealDebugTable'
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
  const [getSearchResults, { loading, data, error }] = useSearchForMealsLazyQuery(
    { variables: { str: term } }
  )

  const firstRender = useRef(true)

  const handleSubmit: FormEventHandler<any> = (event) => {
    event.preventDefault()
    setTerm(currentTerm)
    getSearchResults()
  }

  const handleChange: ChangeEventHandler<any> = (event) => {
    setLastTerm(event.target.value)
    setCurrentTerm(event.target.value)
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
    }
  }, [])

  if (error) return <Error error={ error } />

  return (
    <Container>
      <h1>Let's get cooking!</h1>
      <SearchForm
        placeholderValue='Chicken'
        handleSubmit={ handleSubmit }
        handleChange={ handleChange }
        targetValue={ lastTerm || currentTerm }
      />
      {
        loading ? <Loading /> :
          data && data.mealsByArbitraryString?.length
            ? <ItemCardGrid data={ data } />
            : (!firstRender.current && <h1>No results!</h1>)
      }
    </Container>
  )
}

export default RecipeIndex
