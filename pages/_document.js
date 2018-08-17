import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="stylesheet" href="../static/style/antd.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}