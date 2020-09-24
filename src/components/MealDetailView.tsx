import React from 'react'

import Container from 'react-bootstrap/Container'

import TextContainer from '../components/TextContainer'
import { MealDetailQuery } from '../generated/graphql'

interface MealDetailViewProps {
    data: MealDetailQuery
}

const MealDetailView: React.FC<MealDetailViewProps> = ({ data }) => {
    const ingredients = data?.mealByID?.ingredients?.map((ingredient) =>
        <li>{ingredient?.name ?? 'ERROR'}: {ingredient?.amount ?? 'ERROR'}</li>
    )

    const instructions = data?.mealByID?.instructions?.map((instruction) =>
        <li>{instruction ?? 'ERROR'}</li>
    )
    
    return (
        <Container>
            <TextContainer>
                <h1>{data?.mealByID?.name ?? 'ERROR'}</h1>
                <h2>☙{data?.mealByID?.category ?? 'ERROR'}, {data?.mealByID?.area ?? 'ERROR'}❧</h2>
                <h3>Ingredients</h3>
                <ul>{ ingredients }</ul>
                <h3>Instructions</h3>
                <ol>{ instructions }</ol> 
            </TextContainer>
        </Container>
    )
}

export default MealDetailView