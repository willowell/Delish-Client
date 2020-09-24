import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { MealCardQuery } from '../generated/graphql'

interface ItemCardProps {
    data: MealCardQuery
}

const ItemCard: React.FC<ItemCardProps> = ({ data }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data?.mealByID?.thumbnail ?? ''} />

            <Card.Body>
                <Card.Title>{data?.mealByID?.name ?? ''}</Card.Title>

                <Button variant="primary">Let's go!</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemCard