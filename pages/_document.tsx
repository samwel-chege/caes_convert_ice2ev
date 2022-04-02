import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext} from 'next/document'
import React, { ReactElement } from "react";

export default class MyDocument extends Document {
 

  render(): ReactElement {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </Head>
        < body >
          <Main />
          < NextScript />
        </body>
      </Html>
    );
  }

}
