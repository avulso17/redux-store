import { Header } from '../header'
import { Navbar } from '../navbar'
import { Sidebar } from '../sidebar'
import { ChildrenContent, Container } from './styles'

interface ILayoutProps {
  children?: React.ReactNode
  style?: React.CSSProperties
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
