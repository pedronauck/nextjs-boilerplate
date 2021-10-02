import { FC } from 'react'
import { css } from '@emotion/react'
import tw from 'twin.macro'

import { Layout } from 'systems/Core'

const Home: FC = () => {
  return (
    <Layout title="NextJS Boilerplate">
      <main css={styles.root}>Hello world</main>
    </Layout>
  )
}

const styles = {
  root: css`
    ${tw`flex flex-col items-center justify-center w-full`};
    height: 100vh;
  `,
}

export default Home
