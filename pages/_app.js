import React, { useState, useEffect } from "react";
import Head from "next/head";
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
      <Component {...pageProps} isMobile={isMobile} />
    </>
  );
}

export default MyApp;
