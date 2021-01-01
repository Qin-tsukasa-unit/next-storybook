import { ServerStyleSheets } from '@material-ui/core/styles'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import theme from '../../styles/theme'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja-JP">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const MuiSheets = new ServerStyleSheets()
  const styledComponentsSheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => styledComponentsSheet.collectStyles(MuiSheets.collect(<App {...props} />))
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        MuiSheets.getStyleElement(),
        styledComponentsSheet.getStyleElement()
      ]
    }
  } finally {
    styledComponentsSheet.seal()
  }
}
