import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'

import { ThemeProvider } from '@/components/UI'
import { Layout } from '@/components/UI/layout'
import store from '@/store'
import { GlobalStyle } from '@/styles/global'

// import '../../lottie.config.js'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

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
