"use client";

import HorizontalTransition from "@/utils/loader";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const phrases = [
  "A Cupdale apresenta o primeiro copo inteligente: ",
  "um design inovador capaz de alterar e manter ",
  "a temperatura exata da sua bebida, quente ou ",
  "gelada, garantindo a experiência perfeita do ",
  "primeiro ao último gole, sem perder o sabor.",

  "ㅤ",

  "Equipado com tecnologia avançada de controle ",
  "térmico, o Cupdale ajusta o calor ou resfriamento ",
  "de forma automática, adaptando-se ao seu ritmo ",
  "e às suas preferências a cada momento do dia.",

  "ㅤ",

  "Mais do que um simples copo, ele redefine a forma ",
  "como você consome suas bebidas, unindo conforto, ",
  "inovação e liberdade em um só produto.",
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

const Contact = () => {
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
            <div className="  h-fit overflow-hidden max-lg:mb-4">
              <motion.h1
                className="text-s text-[3.5rem] font-semibold tracking-tight  max-md:text-[2.5rem]"
                variants={textSlideAnim}
                initial="initial"
                animate="animate2"
              >
                Fale
                <span className="ml-3 text-red-500">conosco</span>
              </motion.h1>
            </div>

            <form className="mb-8 max-w-[500px] w-full">
              <input
                type="email"
                className="mb-4 p-2 border-b border-brd-2 text-s text-[1rem] bg-transparent outline-none w-full max-w-[550px] 
                  placeholder:text-s/50 focus:border-red-500 transition-colors duration-300"
                placeholder="Seu e-mail"
              />
              <br />
              <input
                type="text"
                className="mb-4 p-2 border-b border-brd-2 text-s text-[1rem] bg-transparent outline-none w-full max-w-[550px] 
                  placeholder:text-s/50 focus:border-red-500 transition-colors duration-300"
                placeholder="Seu nome"
              />
              <br />
              <textarea
                type="text"
                className="mb-4 h-[150px] p-2 border-b border-brd-2 text-s text-[1rem] bg-transparent outline-none w-full max-w-[550px] 
                  placeholder:text-s/50 focus:border-red-500 transition-colors duration-300 resize-none"
                placeholder="Escreva sua mensagem"
              />
              <button
                className="w-full h-[40px]   bg-red-500 rounded-full text-p text-[.85rem] font-bold flex items-center justify-center
               hover:bg-red-500 hover:text-p transition-all duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </HorizontalTransition>
  );
};

export default Contact;
