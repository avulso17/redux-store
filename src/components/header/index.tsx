import Head from 'next/head'

interface IHeaderProps {
  children?: React.ReactNode
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
