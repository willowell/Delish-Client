import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'http://localhost:3000/'
})

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
})

ReactDOM.render(
  <ApolloProvider client={ client }>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
