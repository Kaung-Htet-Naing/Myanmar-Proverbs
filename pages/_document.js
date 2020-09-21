import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="title" content="MM Proverbs" />
          <meta name="description" content="You can search anything all about myanmar proverbs " />
          <meta name="keywords" content="Myanmar Proverbs,myanmar proverbs,MM Proverbs,mm proverbs,မြန်မာစကားပုံ,စကားပုံ" />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="Kaung Htet Naing" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
          <link href="https://fonts.googleapis.com/css2?family=Padauk&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}