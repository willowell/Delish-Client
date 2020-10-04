import React from 'react'
import { Link } from '@reach/router'
import Card from 'react-bootstrap/Card'

import { MealTileFragment } from '../gen/graphql'

interface ItemCardProps {
  data: MealTileFragment
}

const ItemCard: React.FC<ItemCardProps> = ({ data }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data?.thumbnail ?? ''} />

      <Card.Body>
        <Card.Title>{data?.name ?? ''}</Card.Title>

        <Link to={`${data.id ?? ''}`} className="btn btn-primary" role="button">
                    Let's go!
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ItemCard
