import Document, { Html, Head, Main, NextScript } from "next/document";

const APP_NAME = "Amodu Kehinde";
// const PREVIEW_IMAGE = "/preview-image.png";
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#3182CE" />

          {/* add your own app-icon */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="shortcut icon" href="/app-icon.png" /> */}
          <link rel="manifest" href="/manifest.json" />
          <script
            async
            src=""
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          <meta
            name="description"
            content="A Resume Portfolio Website"
          />

          <meta itemProp="name" content="Amodu Kehinde" />
          <meta
            itemProp="description"
            content="A Resume Portfolio Website"
          />
          <meta itemProp="image" content="" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@iamkennis_" />
          <meta name="twitter:title" content="A Resume Portfolio Website" />
          <meta
            name="twitter:description"
            content="A Resume Portfolio Website"
          />
          <meta name="twitter:creator" content="@iamkennis_" />
          <meta name="twitter:image" content="" />
          <meta
            name="twitter:image:alt"
            content="let’s start the conversation!"
          />

          <meta property="og:title" content="A Resume Portfolio Website" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:image" content=""/>
          <meta property="og:image:url" content="" />
          <meta
            property="og:image:alt"
            content="let’s start the conversation!"
          />
          <meta
            property="og:description"
            content="let’s start the conversation!"
          />
          <meta property="og:site_name" content="Amodu Kehinde" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
