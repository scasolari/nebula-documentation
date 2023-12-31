import { Html, Head, Main, NextScript } from 'next/document'
import {useEffect} from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.VERCEL_ENV === 'preview' || 'development' ? '4R2ZKTH9XH' : 'D8W7NNPDSZ' }`}></script>
          <script
              dangerouslySetInnerHTML={{
                  __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-${process.env.VERCEL_ENV === 'preview' || 'development' ? '4R2ZKTH9XH' : 'D8W7NNPDSZ' }');
`,
              }}
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
