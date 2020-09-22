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



export default function Home (props: RouteComponentProps): JSX.Element {
    const { data, loading, error } = useGetSampleMealDetailQuery()

    if (loading) return <p>Loading...</p>
    if (error) return <p>ERROR</p>
    if (!data) return <p>Not found</p>

    return (
    <Container>
        <Container>
            <HomeCarousel />
        </Container>
        {/*
        <Container>
            <CardColumns>
                <ItemCard imageSource={data.item1.thumbnail} mealName={data.item1.name} />
                <ItemCard imageSource={data.item2.thumbnail} mealName={data.item2.name} />
                <ItemCard imageSource={data.item3.thumbnail} mealName={data.item3.name} />
                <ItemCard imageSource={data.item4.thumbnail} mealName={data.item4.name} />
                <ItemCard imageSource={data.item5.thumbnail} mealName={data.item5.name} />
                <ItemCard imageSource={data.item6.thumbnail} mealName={data.item6.name} />
            </CardColumns>
        </Container>
        */}
        <Container>
            <TextContainer>
                { !!data.mealByID &&
                <> 
                    <h1>{data.mealByID.name}</h1>
                    <h2>☙{data.mealByID.category}, {data.mealByID.area}❧</h2>
                    <h3>Ingredients</h3>
                    <ul>
                        { !!data.mealByID.ingredients &&
                            data.mealByID.ingredients.map((ingredient) =>
                                !!ingredient && <li>{ingredient.name}: {ingredient.amount}</li>
                            )
                        }
                    </ul>
                    <h3>Instructions</h3>
                    <ol>
                        { !!data.mealByID.instructions &&
                            data.mealByID.instructions.map((instruction) =>
                                !!instruction && <li>{instruction}</li>
                            )
                        }
                    </ol>
                </>
            }
            </TextContainer>
        </Container>
    </Container>
  )
}


