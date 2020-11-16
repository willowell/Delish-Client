import React from 'react'
import { RouteComponentProps } from '@reach/router'

const NoMatch: React.FC<RouteComponentProps> = (props) => {
  return (
    <>
      <h1>404</h1>
      <p>Sorry, there's no soup here!</p>
      <p>If you think you've found this in error, please contact William Howell.</p>
    </>
  )
}

export default NoMatch
