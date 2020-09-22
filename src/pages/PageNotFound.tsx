import React from 'react'
import { RouteComponentProps } from '@reach/router'
import TextContainer from '../components/TextContainer'

export default function NoMatch (props: RouteComponentProps) {
  return (
    <TextContainer>
      <h1 className="label">404</h1>
      <p>Sorry, there's no soup here!</p>
      <p>If you think you've found this in error, please contact William Howell.</p>
    </TextContainer>
  )
}
