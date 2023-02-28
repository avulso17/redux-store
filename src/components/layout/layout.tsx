import type { CSSProperties, ReactNode } from 'react'

import { Header } from '../header'
import { Navbar } from '../navbar/navbar'
import { Sidebar } from '../sidebar/sidebar'
import { ChildrenContent, Container } from './styles'

interface ILayoutProps {
  children?: ReactNode
  style?: CSSProperties
}

export function Layout({ children, ...props }: ILayoutProps): JSX.Element {
  return (
    <>
      <Header title='Redux Store' />

      <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Navbar />
        <Sidebar />

        <ChildrenContent {...props}>{children}</ChildrenContent>
      </Container>
    </>
  )
}
