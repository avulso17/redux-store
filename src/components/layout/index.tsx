import type { CSSProperties, MutableRefObject, ReactNode } from 'react'
// import { forwardRef, useImperativeHandle } from 'react'

import { Header } from '../header'
import { Navbar } from '../navbar/navbar'
import { Sidebar } from '../sidebar/sidebar'
import { ChildrenContent, Container } from './styles'

interface ILayoutProps {
  children?: ReactNode
  forwardedRef: MutableRefObject<undefined>
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

// export const Layout = forwardRef(
//   ({ children, forwardedRef, ...props }: ILayoutProps, ref) => {
//     useImperativeHandle(ref, () => forwardedRef.current)

//     return (
//       <>
//         <Header title='Redux Store' />

//         <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           <Navbar />
//           <Sidebar />

//           <ChildrenContent {...props} ref={forwardedRef}>
//             {children}
//           </ChildrenContent>
//         </Container>
//       </>
//     )
//   }
// )

// Layout.displayName = 'Layout'
