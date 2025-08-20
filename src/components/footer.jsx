import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const Footer = () => {
  const [activeModal, setActiveModal] = useState(false);

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
  return (
    <footer className="relative w-full bg-bg-2 p-10">
      <div className="flex flex-col items-start justify-center max-lg:justify-start">
        <div className="w-full h-[75dvh] flex items-center justify-between  max-lg:flex-col max-lg:items-start">
          <div className="h-fit overflow-hidden ">
            <motion.h1
              className="text-p text-[3.5rem] font-semibold tracking-tight max-md:text-[2.5rem]"
              variants={textSlideAnim}
              initial="initial"
              animate="animate2"
            >
              Reserve a sua{" "}
              <span className="text-red-500">
                Cupdale{" "}
                <span className="text-[2rem] font-normal align-top">®</span>
              </span>{" "}
              agora mesmo!
            </motion.h1>
          </div>

          <div className="z-20">
            <div className="mb-8  max-w-[500px] w-full">
              <p className="w-full text-p/75 text-[1rem] leading-relaxed font-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                quae ipsam dicta optio voluptatum, sequi eum eius nostrum iste!
                Quas iste officiis laborum vitae eius dolor maiores, tempore
                blanditiis repudiandae.
              </p>
            </div>

            <button
              className="w-[120px] h-[40px] border border-red-500 rounded-full text-red-500 text-[.85rem] font-semibold flex items-center justify-center
               hover:bg-red-500 hover:text-s transition-all duration-300"
              onClick={() => setActiveModal(true)}
            >
              Reservar
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeModal && (
          <>
            <motion.div
              {...modalAnim}
              className="fixed top-0 right-0 w-[32vw] h-screen bg-bg z-[100] p-8 shadow-2xl flex flex-col gap-5 max-ds:w-[50vw] max-lg:w-[85vw] max-md:w-full"
            >
              <div className="max-w-[600px] w-full flex flex-col justify-start items-center px-4">
                <p className="mb-6 text-s text-[2rem] font-bold tracking-tight max-md:text-[1.5rem]">
                  COPO CUPDALE® — PRETO
                </p>

                <Image
                  src="/CUPDALE.png"
                  width={1000}
                  height={1000}
                  alt="Copo Cupdale"
                  className="mb-8 w-[150px] h-[180px] object-contain"
                />

                <div className="w-full flex flex-col items-center ">
                  <p className="font-semibold text-s text-[1.25rem]">
                    R$465,99 <span className="text-red-500 ">no Pix</span>
                  </p>
                  <p className="mb-6 font-semibold text-s text-[1rem]">
                    ou R$ 279,99 em até 2x sem juros
                  </p>
                  <button
                    className="w-full h-[45px] border border-red-500 text-red-500 rounded-full text-[.9rem] font-semibold flex items-center justify-center
        hover:bg-red-500 hover:text-s transition-all duration-300 mb-6"
                  >
                    Reservar
                  </button>
                </div>
                <div className="mt-4 mb-8 w-full h-[1px] bg-brd-2"></div>

                <div className="w-full flex flex-col items-start gap-3 mb-6">
                  <p className="mb-2 text-s text-[2rem] font-bold tracking-tight max-md:text-[2.5rem]">
                    Características
                  </p>

                  <div className="w-full pb-4 border-b border-brd-2 flex items-center justify-between">
                    <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                      Capacidade
                    </p>
                    <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                      750ml
                    </p>
                  </div>

                  <div className="w-full pb-4 border-b border-brd-2 flex items-center justify-between">
                    <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                      Controle de Temperatura
                    </p>
                    <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                      0°C até 90°C
                    </p>
                  </div>

                  <div className="w-full pb-4 border-b border-brd-2 flex items-center justify-between">
                    <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                      Material
                    </p>
                    <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                      Aço Inox Premium
                    </p>
                  </div>

                  <div className="w-full pb-4 border-b border-brd-2 flex items-center justify-between">
                    <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                      Duração da Bateria
                    </p>
                    <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                      Até 24h de uso
                    </p>
                  </div>

                  <div className="w-full pb-4 border-b border-brd-2 flex items-center justify-between">
                    <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                      Carregamento
                    </p>
                    <p className="text-s/80 text-[1rem] leading-relaxed font-normal">
                      USB-C Rápido
                    </p>
                  </div>
                </div>
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

      <div className="absolute bottom-0 p-2  flex items-center justify-between mix-blend-exclusion">
        <p className="text-s text-[.8rem]">
          © {new Date().getFullYear()} Cupdale®. Todos os direitos reservados.
        </p>
        <p className="text-s text-[.8rem]">Feito com ❤️ por paulovdev</p>
      </div>
    </footer>
  );
};

export default Footer;
