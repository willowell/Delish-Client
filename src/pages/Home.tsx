import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { RouteComponentProps } from '@reach/router'
import gql from 'graphql-tag'

import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import ItemCard from '../components/ItemCard'
import ItemCardGrid from '../components/ItemCardGrid'
import HomeCarousel from '../components/HomeCarousel'
import TextContainer from '../components/TextContainer'

import { MeasuredIngredient, useGetSampleMealCardInfoQuery, useGetSampleMealDetailQuery } from '../generated/graphql'
import MealDetailView from '../components/MealDetailView'



const Home: React.FC<RouteComponentProps> = (props) => {
    const { data, loading, error } = useGetSampleMealDetailQuery()

    if (loading) return <p>Loading...</p>
    if (error) return <p>ERROR</p>
    if (!data) return <p>Not found</p>

    return (
    <Container>
        <Container>
            <HomeCarousel />
        </Container>
        <Container>
            <MealDetailView data={data} />
        </Container>
    </Container>
  )
}

export default Home
