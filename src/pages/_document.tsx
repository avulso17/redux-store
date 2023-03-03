import type { DocumentContext } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<{
    head?: Array<JSX.Element | null> | undefined
    html: string
    styles: JSX.Element
  }> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel='shortcut icon' href='/favicon.ico' type='image/ico' />
          <meta
            name='description'
            content='Redux Store - Powered by Felipe Mateus'
          />
          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content='https://redux-store-dev.vercel.app'
          />
          <meta
            property='og:title'
            content='Redux Store - Powered by Felipe Mateus'
          />
          <meta
            property='og:description'
            content='Redux Store - Powered by Felipe Mateus'
          />
          <meta property='og:image' content='/eletronicos.png' />
          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:url'
            content='https://redux-store-dev.vercel.app'
          />
          <meta
            property='twitter:title'
            content='Redux Store - Powered by Felipe Mateus'
          />
          <meta
            property='twitter:description'
            content='Redux Store - Powered by Felipe Mateus'
          />
          <meta property='twitter:image' content='/eletronicos.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
