import { Link } from '@reach/router'
import React from 'react'

import { SearchForMealsQuery } from '../gen/graphql'

interface MealDebugTableProps {
  data?: SearchForMealsQuery
}

const MealDebugTable: React.FC<MealDebugTableProps> = ({ data }) => {
  const rows = data?.mealsByArbitraryString?.map((item, i) => {
    return (
      <tr key={i}>
        <td>{ item?.id ?? '???'}</td>
        <td>{ item?.name ?? '???' }</td>
        <td>
          <Link to={`${item?.id ?? ''}`}>
            {`${item?.id ?? ''}`}
          </Link>
        </td>
      </tr>
    )
  })

  return (
    <>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>{ rows }</tbody>
    </>
  )
}

export default MealDebugTable
