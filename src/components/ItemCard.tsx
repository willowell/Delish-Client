import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

interface ItemCardProps {
    imageSource: string
    mealName: string
}

export default function ItemCard (props: ItemCardProps) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imageSource} />

            <Card.Body>
                <Card.Title>{props.mealName}</Card.Title>

                <Button variant="primary">Let's go!</Button>
            </Card.Body>
        </Card>
    )
}