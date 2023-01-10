import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <style>{`html{scroll-behavior: smooth}`}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
