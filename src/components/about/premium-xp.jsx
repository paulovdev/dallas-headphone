import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { textSlideAnim } from "../../anim/anim";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

const premiumxp = [
  {
    title: "Tecnologia sem fio Bluetooth 5.3",
    descriptions: [
      "Conectividade rápida e estável com qualquer dispositivo.",
      "Baixa latência para uma experiência de áudio perfeita.",
      "Mais eficiência energética para maior duração da bateria.",
    ],
  },
  {
    title: "Plataforma Dallas® personalizada",
    descriptions: [
      "Drivers de 40mm com engenharia de precisão para áudio premium.",
      "Resposta de frequência otimizada para graves profundos.",
      "Som cristalino e detalhado em qualquer volume.",
    ],
  },
  {
    title: "Cancelamento Ativo de Ruído",
    descriptions: [
      "Bloqueia até 95% dos ruídos externos para máxima imersão.",
      "Perfeito para viagens, escritórios e ambientes barulhentos.",
      "Ative ou desative facilmente com um único toque.",
    ],
  },
  {
    title: "Seletor Analógico de Graves",
    descriptions: [
      "Controle o nível de graves em tempo real com precisão.",
      "Escolha entre modos suaves, balanceados ou potentes.",
    ],
  },
];

const clipAnim = {
  initial: { clipPath: "inset(100% 0% 0% 0%)" },
  animate: (custom) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.5 + custom,
    },
  }),
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const accordionAnim = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: "75px",
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
  },
};

const PremiumXP = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="pt-40 size-full flex items-start gap-12 max-lg:flex-col max-lg:px-5 max-lg:pt-20"
      id="experiencia-premium"
      ref={ref}
    >
      <div className="w-full flex flex-col">
        <div className="mb-10 h-fit overflow-hidden">
          <motion.h1
            className="text-p font-neue-regular text-[64px] leading-[1.08] tracking-[-0.03em] max-lg:text-[48px] "
            variants={textSlideAnim}
            initial="initial"
            animate={inView ? "animate2" : ""}
          >
            Experiência Premium
          </motion.h1>
        </div>

        <div className="relative w-full flex items-start justify-between gap-8 max-lg:flex-col">
          <motion.figure
            className="size-full flex-[1.5]"
            variants={clipAnim}
            animate={inView ? "animate" : "initial"}
          >
            <Image
              src="/images/headset-accordion.jpg"
              width={2000}
              height={2000}
              className="w-full h-[50vh] object-cover rounded-[1rem] max-lg:h-[30vh]"
              alt="Headset Premium"
            />
          </motion.figure>

          <div className="flex-[2] pr-10 size-full flex flex-col justify-between max-lg:p-0">
            {premiumxp.map((premium, i) => (
              <div
                className="mb-4 py-2 h-fit border-b border-brd overflow-hidden"
                key={i}
              >
                <motion.button
                  className="w-full flex items-center justify-between cursor-pointer group"
                  onClick={() => toggleAccordion(i)}
                  variants={textSlideAnim}
                  initial="initial"
                  animate={inView ? "animate" : ""}
                  custom={i}
                >
                  <span className="mb-2 w-full text-p font-neue-regular text-[24px] leading-[1.2em] flex items-center justify-between gap-3">
                    {premium.title}
                    <AiOutlinePlus
                      className={`text-t text-[2rem] transition-transform duration-300 ${
                        activeIndex === i ? "rotate-45" : "rotate-0"
                      }`}
                    />
                  </span>
                </motion.button>

                <AnimatePresence mode="wait">
                  {activeIndex === i && (
                    <motion.div
                      className="h-fit overflow-hidden"
                      variants={accordionAnim}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      {premium.descriptions.map((desc, idx) => (
                        <div className="overflow-hidden h-fit">
                          <motion.p
                            key={idx}
                            custom={idx}
                            variants={textSlideAnim}
                            initial="initial"
                            animate="animate"
                            className="text-p/75 font-neue-regular text-[16px] leading-[1.3]"
                          >
                            {desc}
                          </motion.p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="absolute bottom-0">
              <p className="text-p font-neue-regular text-[16px] leading-[1.2em] max-lg:hidden">
                Gostou? Pode reservar{" "}
                <a
                  href=""
                  target="_blank"
                  className="font-neue-medium text-t underline"
                >
                  clicando aqui.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumXP;
