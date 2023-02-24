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
            content='Stoned Frogs Staking - Powered by SolaLand'
          />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://stonedfrogs-staking.com' />
          <meta property='og:title' content='SolaLand - Stoned Frogs Staking' />
          <meta
            property='og:description'
            content='Stoned Frogs - Powered by SolaLand'
          />
          <meta property='og:image' content='/frogs.png' />
          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:url'
            content='https://stonedfrogs-staking.com'
          />
          <meta
            property='twitter:title'
            content='SolaLand - Stoned Frogs Staking'
          />
          <meta
            property='twitter:description'
            content='Stoned Frogs Staking - Powered by SolaLand'
          />
          <meta property='twitter:image' content='/frogs.png' />
        </Head>
        <body>
          <Main />
          <div id='modal-portal' />
          <NextScript />
        </body>
      </Html>
    )
  }
}
