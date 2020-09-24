import React from 'react'
import { Router } from '@reach/router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Recipes from './pages/Recipes'
import RecipeIndex from './pages/RecipeIndex'
import Recipe from './pages/Recipe'
import PageNotFound from './pages/PageNotFound'

const Routes = () => {
  return (
    <>
      <Router>
        <Home path='/' />
        <About path='about' />
        <Contact path='contact' />
        <Recipes path='recipes'>
            <RecipeIndex path='/' />
            <Recipe path=':recipeID' />
        </Recipes>
        <PageNotFound default />
      </Router>
    </>
  )
}

export default Routes