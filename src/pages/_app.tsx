import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/styles/global'
import { DefaultTheme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const theme = DefaultTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
