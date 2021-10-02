import { FC } from 'react'
import Head from 'next/head'

import { Favicon } from 'systems/Core'

interface Props {
  head?: any
  title: string
}

export const Layout: FC<Props> = ({ head, children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My app description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Favicon />
        {head}
      </Head>
      {children}
    </>
  )
}
