import type { AppProps } from 'next/app'

import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

import type { DefaultTheme } from 'styled-components'
import { ThemeProvider } from 'styled-components'

import { Layout } from '@/components/layout/layout'
import store from '@/store'
import { GlobalStyle } from '@/styles/global'
import { darkTheme, lightTheme } from '@/styles/theme'

import '@fontsource/roboto'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  function handleTheme(): DefaultTheme {
    const light = lightTheme
    const dark = darkTheme

    if (theme === 'light') {
      return light
    }

    return dark
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={handleTheme()}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Toaster
          position='top-center'
          toastOptions={{
            style: {
              backgroundColor: theme === 'light' ? '#fff' : '#212121',
              color: theme === 'light' ? '#212121' : '#fff',
              fontFamily: 'Roboto',
              fontSize: '1.6rem',
            },
          }}
        />
      </ThemeProvider>
    </Provider>
  )
}
