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
      smooth: true,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <HorizontalTransition />
      <Nav lenis={lenisRef} />

      <Hero onClick={reserveOpen} />

      <About onClick={reserveOpen} lenis={lenisRef} />

      <ReserveWrapper onClick={reserveOpen} />

      <Footer onClick={reserveOpen} lenis={lenisRef} />
    </>
  );
};

export default HomePage;
