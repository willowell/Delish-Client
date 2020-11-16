import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'

const cache = new InMemoryCache()
const link = new HttpLink({
  // Reset to 'http://localhost:4000/' for local development
  // Set to ngrok link for server to show it off!
  uri: 'http://localhost:4000/'
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
