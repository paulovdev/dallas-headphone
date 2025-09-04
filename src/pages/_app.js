import "@/styles/globals.css";
 
export default function App({ Component, pageProps }) {
  return (
    <div className="main noise">
      <Component {...pageProps} />
    </div>
  );
}
