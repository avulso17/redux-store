import { Header } from '@/SEO/header'

import { Navbar } from '../navbar'
import { ChildrenContent, Container } from './styles'

interface ILayoutProps {
  children?: React.ReactNode
  style?: React.CSSProperties
}

export function Layout({ children, ...props }: ILayoutProps): JSX.Element {
  return (
    <>
      <Header title='Flow store' />

      <Container>
        <Navbar />

        <ChildrenContent {...props}>{children}</ChildrenContent>
      </Container>
    </>
  )
}
