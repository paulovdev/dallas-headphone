import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { textSlideAnim } from "../../anim/anim";

const clipAnim = {
  initial: { clipPath: "inset(100% 0% 0% 0%)" },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.25,
    },
  },
};

const overview = [
  {
    title: "Plataforma acústica Dallas® personalizada",
    descriptions: [
      "A plataforma acústica personalizada do fone de ouvido Dallas® cria uma experiência",
      "de som envolvente. Cada driver exclusivo de 40 mm foi projetado para fornecer a maior",
      "nitidez, com distorção praticamente nula, mesmo em volumes altos.",
      " ",
      "Isso representa uma melhoria de até 80% em relação ao Dallas® e um aumento",
      "na fidelidade do áudio. O processador digital integrado otimiza a resposta de",
      "frequência final para produzir um perfil de som poderoso e equilibrado e ",
      "destacar detalhes sutis em tudo o que você ouve.",
    ],
  },
  {
    title: "Cancelamento Ativo de Ruído e modo Ambiente",
    descriptions: [
      "O Dallas® usa tecnologia avançada para eliminar ruídos externos e criar uma",
      "experiência auditiva imersiva. Você pode alternar para o modo Ambiente para",
      "ouvir sons ao seu redor sem tirar os fones.",
    ],
  },
];

const Overview = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <section
      className="pt-20 size-full flex items-start gap-12 max-lg:flex-col max-lg:px-5"
      id="visao-geral"
      ref={ref}
    >
      <div className="flex-[2] max-w-[600px] w-full">
        <div className="mb-10 w-full h-fit overflow-hidden">
          <motion.h1
            className="text-p font-neue-regular text-[64px] leading-[1.08] tracking-[-0.03em] max-lg:text-[48px]"
            variants={textSlideAnim}
            initial="initial"
            animate={inView ? "animate2" : ""}
          >
            Visão Geral
          </motion.h1>
        </div>

        {overview.map((section, i) => (
          <div key={i} className="mb-8">
            <div className="mb-2 w-full h-fit overflow-hidden">
              <motion.h3
                className="text-p font-neue-regular text-[24px] leading-[1.2em] "
                variants={textSlideAnim}
                initial="initial"
                animate={inView ? "animate" : ""}
                custom={i}
              >
                {section.title}
              </motion.h3>
            </div>
            <div className="w-full h-fit overflow-hidden">
              {section.descriptions.map((line, i) => (
                <>
                  <div className="w-full h-fit overflow-hidden">
                    <motion.p
                      key={i}
                      className="text-p/75 font-neue-regular text-[16px] leading-[1.2em]"
                      variants={textSlideAnim}
                      initial="initial"
                      animate={inView ? "animate" : ""}
                      custom={i}
                    >
                      {line}
                    </motion.p>
                  </div>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
