import Document, { Head, Main, NextScript } from "next/document";

import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="pl-PL">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
