import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/700.css'
import './index.css'

import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'

import { Chakra } from 'systems/Core'
import { client } from 'systems/Api'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Chakra>
        <Component {...pageProps} />
      </Chakra>
    </ApolloProvider>
  )
}

export default App
