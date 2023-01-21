import React from "react";
import Head from "next/head";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "./api";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SessionContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </SessionContextProvider>
    </>
  );
}

export default MyApp;
