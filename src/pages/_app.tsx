import type { AppProps } from 'next/app'
// import dynamic from 'next/dynamic'

import { useRef, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

// import type { DefaultTheme } from 'styled-components'
import { ThemeProvider } from 'styled-components'
// import { useDarkMode, useReadLocalStorage } from 'usehooks-ts'

import { Layout } from '@/components/layout'
import { ThemeContext } from '@/contexts/reactThemeContext'
// import { usePersistedState } from '@/hooks/usePersistedState'
import store from '@/store'
import { GlobalStyle } from '@/styles/global'
import { darkTheme, lightTheme } from '@/styles/theme'

import '@fontsource/roboto'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

// const Scene = dynamic(async () => await import('@/components/three/scene'), {
//   ssr: true,
// })

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const ref = useRef()
  // const preferredTheme = useReadLocalStorage('usehooks-ts-dark-mode') as boolean
  // const [theme, setTheme] = usePersistedState<'light' | 'dark'>(
  //   'preferred-theme',
  //   'dark'
  // )
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const light = lightTheme
  const dark = darkTheme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Provider store={store}>
        <ThemeProvider theme={theme === 'dark' ? dark : light}>
          <GlobalStyle />

          <Layout forwardedRef={ref}>
            <Component {...pageProps} />
          </Layout>

          <Toaster
            position='top-center'
            toastOptions={{
              style: {
                backgroundColor: theme === 'dark' ? '#212121' : '#fff',
                color: theme === 'dark' ? '#fff' : '#212121',
                fontFamily: 'Roboto',
                fontSize: '1.6rem',
              },
            }}
          />
        </ThemeProvider>
      </Provider>
    </ThemeContext.Provider>
  )
}
