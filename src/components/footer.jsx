import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Footer = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState("black");

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
    initial: { right: "-100%" },
    animate: {
      right: "0%",
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {
      right: "-100%",
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const footerModalData = {
    title: "COPO CUPDALE®",
    images: {
      black: "/cupdale-black.jpg",
      red: "/cupdale-red.jpg",
      gray: "/cupdale-gray.jpg",
    },
    pricePix: "R$465,99",
    pricePixLabel: "no Pix",
    priceParcel: "R$ 279,99",
    priceParcelLabel: "em até 2x sem juros",
    buttonText: "Reservar",
    featuresTitle: "Características",
    colors: ["black", "red", "gray"],
    features: [
      { label: "Capacidade", value: "750ml" },
      { label: "Controle de Temperatura", value: "0°C até 90°C" },
      { label: "Material", value: "Aço Inox Premium" },
      { label: "Duração da Bateria", value: "Até 24h de uso" },
      { label: "Carregamento", value: "USB-C Rápido" },
    ],
  };

  return (
    <footer className="relative w-full bg-bg-2">
      <div className="p-10 flex flex-col items-start justify-center max-lg:justify-start max-lg:p-5">
        <div className="w-full h-[75dvh] flex items-center justify-between max-lg:h-full max-lg:flex-col max-lg:items-start">
          <div className="h-fit overflow-hidden">
            <motion.h1
              className="text-p text-[3.5rem] font-semibold tracking-tight leading-[1.2] max-md:text-[2.5rem]"
              variants={textSlideAnim}
              initial="initial"
              animate="animate2"
            >
              Reserve o seu{" "}
              <span className="text-red-500">
                Cupdale{" "}
                <span className="text-[2rem] font-normal align-top">®</span>
              </span>{" "}
              agora mesmo!
            </motion.h1>
          </div>

          <div className="z-20 max-lg:py-20">
            <div className="mb-8 max-w-[500px] w-full max-lg:max-w-full">
              <p className="w-full text-p/75 text-[1rem] leading-relaxed font-normal">
                Eleve sua experiência com o{" "}
                <span className="text-red-500 font-semibold">
                  Copo Cupdale®
                </span>
                . Design premium, tecnologia avançada e performance excepcional
                em um só produto. Controle total de temperatura, bateria de
                longa duração e materiais de alta qualidade. Garanta já o seu e
                descubra um novo padrão de praticidade e estilo.
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
              className="fixed top-0 right-0 w-[32vw] h-screen bg-bg z-[100] p-5 shadow-2xl flex flex-col gap-5 max-ds:w-[50vw] max-lg:w-[85vw] max-md:w-full max-lg:px-3"
            >
              <div className="relative mb-10 top-0 w-full flex justify-end">
                <button
                  className="text-s font-medium text-[.75rem] uppercase hover:underline"
                  onClick={() => setActiveModal(null)}
                >
                  Fechar
                </button>
              </div>

              <div className="max-w-[600px] w-full flex flex-col justify-center items-center px-4 max-lg:max-w-full">
                <div className="mb-6 h-fit overflow-hidden">
                  <motion.h2
                    variants={textSlideAnim}
                    initial="initial"
                    animate="animate2"
                    className="text-s text-[1.5rem] font-bold tracking-tight uppercase"
                  >
                    {footerModalData.title} ({selectedColor})
                  </motion.h2>
                </div>
                <AnimatePresence mode="wait">
                  <motion.figure
                    key={selectedColor}
                    className=""
                    initial={{ clipPath: "inset(0% 0% 100% 0% )" }}
                    animate={{
                      clipPath: "inset(0% 0% 0% 0% )",
                      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
                    }}
                    exit={{
                      clipPath: "inset(100% 0% 0% 0% )",
                      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
                    }}
                  >
                    <Image
                      src={footerModalData.images[selectedColor]}
                      width={1000}
                      height={1000}
                      alt={footerModalData.title}
                      className="mb-8 w-[450px] h-[250px] object-cover rounded-lg"
                    />
                  </motion.figure>
                </AnimatePresence>
                <div className="flex items-center justify-center gap-5 mb-6">
                  {footerModalData.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border border-brd flex items-center justify-center relative transition-all duration-300 `}
                      style={{ backgroundColor: color }}
                    >
                      {selectedColor === color && (
                        <FaCheck className="text-white text-[1rem]" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="w-full flex flex-col items-center">
                  <p className="font-semibold text-s text-[1.25rem]">
                    {footerModalData.pricePix}{" "}
                    <span className="text-red-500">
                      {footerModalData.pricePixLabel}
                    </span>
                  </p>
                  <p className="mb-6 font-semibold text-s text-[1rem]">
                    ou {footerModalData.priceParcel}{" "}
                    {footerModalData.priceParcelLabel}
                  </p>
                  <button className="w-full h-[45px] border border-red-500 text-red-500 rounded-full text-[.9rem] font-semibold flex items-center justify-center hover:bg-red-500 hover:text-s transition-all duration-300 mb-6">
                    {footerModalData.buttonText}
                  </button>
                </div>

                <div className="w-full flex flex-col items-start gap-3 mb-6">
                  {footerModalData.features.map((feature, i) => (
                    <div
                      key={i}
                      className="w-full mb-1 overflow-hidden h-fit flex items-center justify-between"
                    >
                      <motion.p
                        className="text-s/75 text-[1rem] leading-relaxed font-medium tracking-tight"
                        custom={i}
                        variants={textSlideAnim}
                        initial="initial"
                        animate="animate"
                      >
                        {feature.label}
                      </motion.p>
                      <motion.p
                        className="text-s/75 text-[1rem] leading-relaxed font-medium tracking-tight"
                        custom={i}
                        variants={textSlideAnim}
                        initial="initial"
                        animate="animate"
                      >
                        {feature.value}
                      </motion.p>
                    </div>
                  ))}
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

      <div className="absolute bottom-0 w-full p-5 flex items-center justify-between mix-blend-exclusion">
        <p className="text-s text-[.8rem]">
          © {new Date().getFullYear()} Cupdale®. Todos os direitos reservados.
        </p>
        <p className="text-s text-[.8rem]">Desenvolvido por paulovdev</p>
      </div>
    </footer>
  );
};

export default Footer;
