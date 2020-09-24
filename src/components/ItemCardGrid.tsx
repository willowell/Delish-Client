import React from 'react'

import CardColumns from 'react-bootstrap/CardColumns'
import { MealCardQuery } from '../generated/graphql'

import ItemCard from './ItemCard'

interface ItemCardGridProps {
    data: MealCardQuery[]
}

const ItemCardGrid: React.FC<ItemCardGridProps> = ({ data }) => {
    const cards = data?.map((item) => {
        return (
            <ItemCard data={ item }/>
        )
    })

    return (
        <CardColumns>
            { cards }
        </CardColumns>
    )
}

export default ItemCardGrid