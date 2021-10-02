import fetch from 'cross-fetch'
import { onError } from '@apollo/client/link/error'

import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'

const URI =
  process.env.NODE_ENV !== 'production'
    ? `http://localhost:1337/graphql`
    : process.env.NEXT_PUBLIC_STRAPI_URL

const httpLink = new HttpLink({ uri: URI, fetch })

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
})
