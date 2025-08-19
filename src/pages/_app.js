import Footer from "@/components/footer";
import Nav from "@/components/nav";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {
  const pathname = usePathname();

  return (
    <div className="main noise">
      <Nav pathname={pathname} />
      <AnimatePresence mode="wait">
        <Component key={pathname} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </div>
  );
}
