import React, { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { usePlatform } from "../hooks";

function MyApp({ Component, pageProps }) {
  const [_isMobile, _setIsMobile] = useState();
  const { isMobile } = usePlatform();

  useEffect(() => {
    _setIsMobile(isMobile);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-87ETS7Y1TK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-87ETS7Y1TK');
        `}
      </Script>

      <Component {...pageProps} isMobile={isMobile} />
    </>
  );
}

export default MyApp;
