import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiHeadphones, FiBluetooth, FiSettings } from "react-icons/fi";
import { MdBattery5Bar } from "react-icons/md";

const textSlideAnim = {
  initial: { y: "100%" },
  animate: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.25 + 0.05 * i,
    },
  }),
  animate2: {
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.25,
    },
  },
};

const highlights = [
  {
    icon: <FiHeadphones className="text-[28px] text-t" />,
    descriptions: [
      "A plataforma acústica personalizada do fone de ouvido",
      "Dallas® cria uma experiência de som envolvente.",
      "Cada driver exclusivo de 40 mm foi projetado para fornecer",
      "a maior nitidez.",
    ],
  },
  {
    icon: <MdBattery5Bar className="text-[28px] text-t" />,
    descriptions: [
      "Para diversão de longa duração, ouça sem fio por até 57 horas",
      "e recarregue a bateria em apenas 2 horas, com o conveniente",
      "cabo USB Tipo C. Uma carga rápida de 5 minutos proporciona",
      "3 horas adicionais de música.",
    ],
  },
  {
    icon: <FiBluetooth className="text-[28px] text-t" />,
    descriptions: [
      "Conectividade Bluetooth de alta performance.",
      "Latência mínima para jogos e vídeos.",
    ],
  },
  {
    icon: <FiSettings className="text-[28px] text-t" />,
    descriptions: [
      "Controles intuitivos integrados ao headset. Compatível ",
      "com múltiplos dispositivos simultaneamente.",
    ],
  },
];

const Highlights = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <section
      className="pt-40 size-full flex items-start gap-12 max-lg:flex-col max-lg:px-5 max-lg:pt-20"
      id="destaques"
      ref={ref}
    >
      <div className="w-full">
        <div className="mb-10 w-full h-fit overflow-hidden">
          <motion.h1
            className="text-p font-neue-regular text-[64px] leading-[1.08] tracking-[-0.03em] max-lg:text-[48px]"
            variants={textSlideAnim}
            initial="initial"
            animate={inView ? "animate2" : ""}
          >
            Destaques
          </motion.h1>
        </div>

        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
          {highlights.map((highlight, i) => (
            <div className="mb-8 w-full h-fit overflow-hidden" key={i}>
              <motion.div
                className="mb-8 flex items-center gap-2"
                variants={textSlideAnim}
                initial={{ filter: "blur(10px)" }}
                animate={{
                  filter: inView ? "blur(0px)" : "blur(10px)",
                  transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
                }}
                custom={i}
              >
                {highlight.icon}
              </motion.div>

              <div className="w-full max-md:max-w-full">
                {highlight.descriptions.map((line, idx) => (
                  <div className="w-full h-fit overflow-hidden" key={idx}>
                    <motion.p
                      className="text-p/75 font-neue-regular text-[16px] leading-[1.2em]"
                      variants={textSlideAnim}
                      initial="initial"
                      animate={inView ? "animate" : ""}
                      custom={idx}
                    >
                      {line}
                    </motion.p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
