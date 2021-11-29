import Document, { Html, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

import { HeadDocument } from "@/components/head-document";

class HTMLDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <HeadDocument />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default HTMLDocument;
