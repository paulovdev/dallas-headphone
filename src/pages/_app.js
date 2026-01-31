import "@/styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dallas® HeadPhone</title>
      </Head>
      <div className="main noise">
        <Component {...pageProps} />
      </div>
    </>
  );
}
