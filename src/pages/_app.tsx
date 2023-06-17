import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'

import { Layout } from '@/components/layout'
import { ThemeProvider } from '@/components/UI'
import store from '@/store'
import { GlobalStyle } from '@/styles/global'

import '@fontsource/roboto'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <GlobalStyle />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}
