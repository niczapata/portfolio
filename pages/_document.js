import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * Custom Document component to augment the application's <html> and <body> tags.
 * This is a top-level component that is only rendered on the server.
 * 
 * @extends Document
 */
class MyDocument extends Document {
  /**
   * Fetches the initial props for the document.
   * This method is called on the server side and allows for server-side rendering customization.
   * 
   * @param {Object} ctx - The Next.js context object
   * @returns {Object} Initial props for the document
   */
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  /**
   * Renders the document structure including HTML, Head, and body tags.
   * This defines the base HTML structure for all pages in the application.
   * 
   * @returns {JSX.Element} The rendered document structure
   */
  render() {
    return (
      <Html>
        <Head>
          <title>My portfolio</title>
        </Head>
        <meta name="description" content="Nicolas Zapata Portfolio Website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
