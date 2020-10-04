import { ApolloError } from 'apollo-client'
import React from 'react'

interface ErrorProps {
  error?: ApolloError
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <h1>{ error?.message ?? 'UNKNOWN'}</h1>
  )
}

export default Error
