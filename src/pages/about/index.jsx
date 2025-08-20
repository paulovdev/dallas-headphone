"use client";

import HorizontalTransition from "@/utils/loader";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const phrases = [
  "A Cupdale apresenta o primeiro copo inteligente: um design inovador ",
  "capaz de alterar e manter a temperatura exata da sua bebida, ",
  "quente ou gelada, garantindo a experiência perfeita do primeiro ao ",
  "último gole, sem perder o sabor.",

  "ㅤ",

  "Equipado com tecnologia avançada de controle térmico, o Cupdale ",
  "ajusta o calor ou resfriamento de forma automática, adaptando-se ",
  "ao seu ritmo e às suas preferências a cada momento do dia.",

  "ㅤ",

  "Mais do que um simples copo, ele redefine a forma como você",
  "consome suas bebidas, unindo conforto, inovação e liberdade em",
  "um só produto.",
];

const textSlideAnim = {
  initial: { y: "100%" },
  animate: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.5 + 0.05 * i,
    },
  }),
  animate2: {
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.5,
    },
  },
};

const About = () => {
  const lenisRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1,
    });
    lenisRef.current = lenis;
    scrollTo({ top: 0 });
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HorizontalTransition>
      <div className="relative p-10 w-screen h-[100dvh] overflow-hidden max-lg:p-5">
        <div className="absolute inset-0 w-screen h-[100dvh] z-[-1]">
          <video
            src="/video.mp4"
            className="size-full object-cover brightness-50"
            autoPlay
            muted
            loop
            draggable="false"
            playsInline
            preload="auto"
          />
        </div>

        <div className="size-full flex items-center justify-center">
          <div className="w-full flex items-center justify-between max-lg:flex-col max-lg:items-start">
            <div className="h-fit overflow-hidden max-lg:mb-4">
              <motion.h1
                className="text-s text-[3.5rem] font-semibold tracking-tight  max-md:text-[2.5rem]"
                variants={textSlideAnim}
                initial="initial"
                animate="animate2"
              >
                Sobre a
                <span className="ml-3 text-red-500">
                  Cupdale
                  <span className="text-[2rem] font-normal align-top">®</span>
                </span>
              </motion.h1>
            </div>

            <div className="mb-8 max-w-[500px] w-full">
              {phrases.map((phrase, i) => (
                <div key={i} className="overflow-hidden w-full">
                  <motion.h2
                    className="text-s/75 text-[1rem] leading-relaxed font-medium tracking-tight"
                    custom={i}
                    {...textSlideAnim}
                  >
                    {phrase}
                  </motion.h2>
                </div>
              ))}
              <div className="mt-8 flex items-center gap-4 ">
                <div className="w-10 h-10 p-3 bg-brd rounded-full flex items-center justify-center">
                  <SiFacebook className="text-[1.5rem] text-red-500" />
                </div>
                <div className="w-10 h-10 p-3 bg-brd rounded-full flex items-center justify-center">
                  <SiInstagram className="text-[1.5rem] text-red-500" />
                </div>
                <div className="w-10 h-10 p-3 bg-brd rounded-full flex items-center justify-center">
                  <SiX className="text-[1.5rem] text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HorizontalTransition>
  );
};

export default About;
