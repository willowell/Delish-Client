import React from 'react'

import CardColumns from 'react-bootstrap/CardColumns'

import ItemCard from './ItemCard'

interface Item {
    imageSource: string
    mealName: string
}

interface ItemCardGridProps {
    items:  Item[]
}

export default function ItemCardGrid (props: ItemCardGridProps) {
    const cards = props.items.map((item) => {
        return (
            <ItemCard imageSource={item.imageSource} mealName={item.mealName}/>
        )
    })

    return (
        <CardColumns>
            { cards }
        </CardColumns>
    )
}