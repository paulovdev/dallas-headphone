"use client";

import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HorizontalTransition from "@/utils/loader";
import { AiOutlinePlus } from "react-icons/ai";
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

const modalAnim = {
  initial: {
    right: "-100%",
  },
  animate: {
    right: "0%",
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  exit: {
    right: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const modalData = [
  {
    id: 1,
    title: "Tecnologia Térmica Avançada",
    description: [
      "Nosso sistema térmico inovador mantém sua bebida gelada ou quente por ",
      "até 7 dias. Ideal para quem busca performance, praticidade e máxima",
      "eficiência.",
    ],
    benefits: [
      "Isolamento térmico triplo para retenção prolongada",
      "Vedação hermética para evitar vazamentos",
      "Materiais premium com alta durabilidade",
      "Design minimalista e ergonômico",
    ],
    howItWorks: [
      "Escolha a temperatura desejada e aproveite. A tecnologia inteligente ",
      "mantém o equilíbrio térmico independentemente do clima.",
    ],
  },
  {
    id: 2,
    title: "Switch Inteligente para Troca de Função",
    description: [
      "Com o botão Switch, alterne entre bebidas geladas ou quentes",
      "em segundos. Um sistema prático, rápido e preciso para controlar",
      "a temperatura.",
    ],
    benefits: [
      "Troca instantânea entre quente e gelado",
      "Controle preciso e fácil de operar",
      "Economia de energia inteligente",
      "Design funcional e moderno",
    ],
    howItWorks: [
      "Basta pressionar o botão Switch e selecionar a função desejada.",
      "Simples, rápido e eficiente.",
    ],
  },
];

const HotSpot = () => {
  const [hovered, setHovered] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="relative mt-30 max-w-[500px] w-full h-[80vh] mx-auto flex items-center justify-center">
        <motion.div
          className="absolute top-15 right-20 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center  shadow-lg z-20"
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setActiveModal(1)}
          animate={{ scale: activeModal === 1 || hovered === 1 ? 1 : 0.4 }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        >
          <motion.span
            animate={{
              opacity: hovered === 1 || activeModal === 1 ? 1 : 0,
              rotate: activeModal === 1 ? 45 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          >
            <AiOutlinePlus className="text-white text-[1.25rem]" />
          </motion.span>
        </motion.div>

        <motion.div
          className="absolute bottom-15 left-20 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center cursor- shadow-lg z-20"
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setActiveModal(2)}
          animate={{ scale: activeModal === 2 || hovered === 2 ? 1 : 0.4 }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        >
          <motion.span
            animate={{
              opacity: hovered === 2 || activeModal === 2 ? 1 : 0,
              rotate: activeModal === 2 ? 45 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          >
            <AiOutlinePlus className="text-white text-[1.25rem]" />
          </motion.span>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeModal && (
            <>
              <motion.div
                {...modalAnim}
                className="fixed top-0 right-0 w-[32vw] h-screen bg-bg-2 z-[100] p-8 shadow-2xl flex flex-col gap-5 max-ds:w-[50vw] max-lg:w-[85vw] max-md:w-full"
              >
                <div className="relative mb-10 top-0 w-full flex justify-end">
                  <button
                    className="text-p font-medium text-[.75rem] uppercase hover:underline"
                    onClick={() => setActiveModal(null)}
                  >
                    Fechar
                  </button>
                </div>

                <div className="h-fit overflow-hidden">
                  <motion.h2
                    variants={textSlideAnim}
                    initial="initial"
                    animate="animate2"
                    className="text-p font-semibold text-[1.1rem]"
                  >
                    {modalData[activeModal - 1].title}
                  </motion.h2>
                </div>

                <div>
                  {modalData[activeModal - 1].description.map((phrase, i) => (
                    <div key={i} className="overflow-hidden w-full">
                      <motion.p
                        className="text-p/75 text-[1rem] leading-relaxed font-medium tracking-tight"
                        custom={i}
                        variants={textSlideAnim}
                        initial="initial"
                        animate="animate"
                      >
                        {phrase}
                      </motion.p>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="h-fit overflow-hidden">
                    <motion.h3
                      variants={textSlideAnim}
                      initial="initial"
                      animate="animate2"
                      className="text-p font-semibold text-[1.1rem]"
                    >
                      Benefícios principais:
                    </motion.h3>
                  </div>

                  <ul className="list-disc list-inside">
                    {modalData[activeModal - 1].benefits.map((phrase, i) => (
                      <div key={i} className="overflow-hidden w-full">
                        <motion.li
                          className="text-p/75 text-[1rem] leading-relaxed font-medium tracking-tight"
                          custom={i}
                          variants={textSlideAnim}
                          initial="initial"
                          animate="animate"
                        >
                          {phrase}
                        </motion.li>
                      </div>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="h-fit overflow-hidden">
                    <motion.h3
                      variants={textSlideAnim}
                      initial="initial"
                      animate="animate2"
                      className="text-p font-semibold text-[1.1rem]"
                    >
                      Como funciona:
                    </motion.h3>
                  </div>

                  {modalData[activeModal - 1].howItWorks.map((phrase, i) => (
                    <div key={i} className="overflow-hidden w-full">
                      <motion.p
                        className="text-p/75 text-[1rem] leading-relaxed font-medium tracking-tight"
                        custom={i}
                        variants={textSlideAnim}
                        initial="initial"
                        animate="animate"
                      >
                        {phrase}
                      </motion.p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
                onClick={() => setActiveModal(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const HomePage = () => {
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
        <div className="absolute inset-0 w-screen h-[100dvh] z-[-1] select-none">
          <Image
            src="/cupdale-black.jpg"
            className="size-full object-fill brightness-90 max-full-ds:object-cover"
            width={2000}
            height={2000}
            alt="cupdale-background"
            priority
          />
        </div>

        <HotSpot />

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

            <div className="max-w-[500px] w-full z-20">
              <div className="mb-8">
                {phrases.map((phrase, i) => (
                  <div key={i} className="overflow-hidden w-full">
                    <motion.p
                      className="text-s/75 text-[1rem] leading-relaxed font-medium tracking-tight"
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
