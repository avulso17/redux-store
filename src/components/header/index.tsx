import Head from 'next/head'

import type { ReactNode } from 'react'

interface IHeaderProps {
  children?: ReactNode
  title?: string
}

export const Header = ({ title = '', children }: IHeaderProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {children}
      </Head>
    </>
  )
}
