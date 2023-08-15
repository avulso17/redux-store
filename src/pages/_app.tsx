import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'

import { ThemeProvider } from '@/components/UI'
import { Layout } from '@/components/UI/layout'
import store from '@/store'
import { GlobalStyle } from '@/styles/global'

// import '../../lottie.config.js'

function App({ Component, pageProps }: AppProps): JSX.Element {
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

export default App
