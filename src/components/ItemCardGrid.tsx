import React from 'react'

import CardColumns from 'react-bootstrap/CardColumns'
import { SearchForMealsQuery } from '../gen/graphql'

import ItemCard from './ItemCard'

interface ItemCardGridProps {
  data?: SearchForMealsQuery
}

const ItemCardGrid: React.FC<ItemCardGridProps> = ({ data }) => {
  const cards = data?.mealsByArbitraryString?.map((item, i) =>
    item && <ItemCard key={ i } data={ item } />
  )

  return (
    <CardColumns>
      { cards }
    </CardColumns>
  )
}

export default ItemCardGrid
