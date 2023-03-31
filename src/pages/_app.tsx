import type { AppProps } from 'next/app'

import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'

import { Layout } from '@/components/layout'
import { ThemeContext } from '@/contexts/reactThemeContext'
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
  const light = lightTheme
  const dark = darkTheme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Provider store={store}>
        <ThemeProvider theme={theme === 'dark' ? dark : light}>
          <GlobalStyle />
          <Layout>
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
