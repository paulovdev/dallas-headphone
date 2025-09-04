"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { useReserveStore } from "@/store/zustand";

import HorizontalTransition from "@/loader";
import Hero from "@/components/hero";
import About from "@/components/about";
import ReserveWrapper from "@/components/reserve-wrapper";
import Footer from "@/components/footer";
import Nav from "@/components/nav";

const HomePage = () => {
  const lenisRef = useRef(null);
  const { reserveOpen } = useReserveStore();
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 0.75,
    });
    lenisRef.current = lenis;
    /* scrollTo({ top: 0 });
    window.scrollTo(0, 0); */
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <HorizontalTransition />
      <Nav />

      <Hero onClick={reserveOpen} />

      <About onClick={reserveOpen} />

      <ReserveWrapper onClick={reserveOpen} />

      <Footer onClick={reserveOpen} />
    </>
  );
};

export default HomePage;
