"use client";

import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import HorizontalTransition from "@/utils/loader";
import Image from "next/image";

const phrases = [
  "O primeiro copo inteligente que controla a temperatura.",
  "Sua bebida quente ou gelada por até uma semana.",
  "Basta dar um toque para alternar entre quente e gelado.",
  "Muito fácil de usar.",
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

const HomePage = () => {
  const lenisRef = useRef(null);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

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
            className="size-full object-cover brightness-75"
            autoPlay
            muted
            loop
            draggable="false"
            playsInline
            preload="auto"
          />
        </div>

        <div className="absolute inset-0 w-full h-full">
          <div className="relative mt-30 max-w-[500px] w-full h-[80vh] mx-auto flex items-center justify-center">
            <div
              className="absolute top-15 right-20 w-3 h-3 rounded-full bg-red-500 z-20"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            />

            <div
              className="absolute bottom-2 left-20 w-3 h-3 rounded-full bg-red-500 z-20"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            />

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isHovered1 ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className="absolute w-[150px] h-[1px] top-[66px] -right-15 bg-red-500 origin-left z-10"
            />

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isHovered2 ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className="absolute w-[150px] h-[1px] bottom-[14px] -left-15 bg-red-500 origin-right z-10"
            />

            <motion.div
              initial={{ opacity: 1, clipPath: "inset(0% 100% 0% 0%)" }}
              animate={
                isHovered1
                  ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }
                  : { opacity: 1, clipPath: "inset(0% 100% 0% 0%)" }
              }
              transition={{
                duration: 0.4,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="absolute -top-[8px] -right-66 flex flex-col items-center justify-center max-w-[300px]"
            >
              <Image
                src={"/therm.png"}
                width={250}
                height={250}
                alt="feature"
                className="mb-4 w-[40px] h-[50px]"
              />
              <p className="text-s text-[.7rem] font-normal uppercase indent-9">
                Térmico que mantém a bebida
              </p>
              <p className="text-s text-[.7rem] font-normal uppercase">
                gelada ou quente por até
                <span className="text-red-500 font-bold"> 1 semana</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, clipPath: "inset(0% 0% 0% 100%)" }}
              animate={
                isHovered2
                  ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }
                  : { opacity: 1, clipPath: "inset(0% 0% 0% 100%)" }
              }
              transition={{
                duration: 0.4,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="absolute -bottom-[11px] -left-80 flex flex-col items-center justify-center max-w-[300px]"
            >
              <Image
                src={"/sis.png"}
                width={250}
                height={250}
                alt="feature"
                className="mb-4 w-[50px] h-[60px]"
              />
              <p className="text-s text-[.7rem] font-normal uppercase ">
                Switch para mudar a temperatura
              </p>
              <p className="text-s text-[.7rem] font-normal uppercase  indent-15">
                {" "}
                da bebida de{" "}
                <span className="text-red-500 font-bold">quente</span> para
                <span className="text-red-500 font-bold"> gelada</span>
              </p>
            </motion.div>
          </div>
        </div>

        <div className="size-full flex items-center justify-center">
          <div className="w-full flex items-center justify-between  max-lg:flex-col max-lg:items-start">
            <div className="h-fit overflow-hidden  max-lg:mb-4">
              <motion.h1
                className="text-s text-[3.5rem] font-semibold tracking-tight  max-md:text-[2.5rem]"
                variants={textSlideAnim}
                initial="initial"
                animate="animate2"
              >
                Conheça o
                <span className="ml-3 text-red-500">
                  Cupdale
                  <span className="text-[2rem] font-normal align-top">®</span>
                </span>
              </motion.h1>
            </div>

            <div className="z-20">
              <div className="mb-8  max-w-[500px] w-full">
                {phrases.map((phrase, i) => (
                  <div key={i} className="overflow-hidden w-full">
                    <motion.p
                      className="w-full text-s/75 text-[1.1rem] leading-relaxed font-normal"
                      custom={i}
                      {...textSlideAnim}
                    >
                      {phrase}
                    </motion.p>
                  </div>
                ))}
              </div>

              <button
                className="w-[120px] h-[40px] border border-red-500 rounded-full text-red-500 text-[.85rem] font-semibold flex items-center justify-center
               hover:bg-red-500 hover:text-p transition-all duration-300"
              >
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </HorizontalTransition>
  );
};

export default HomePage;
