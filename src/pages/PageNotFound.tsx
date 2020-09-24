import React from 'react'
import { RouteComponentProps } from '@reach/router'
import TextContainer from '../components/TextContainer'

const NoMatch: React.FC<RouteComponentProps> = (props) => {
  return (
    <TextContainer>
      <h1 className="label">404</h1>
      <p>Sorry, there's no soup here!</p>
      <p>If you think you've found this in error, please contact William Howell.</p>
    </TextContainer>
  )
}

export default NoMatch
