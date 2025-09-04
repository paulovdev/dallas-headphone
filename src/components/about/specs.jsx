import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { textSlideAnim } from "../../anim/anim";

const specs = [
  { title: "Altura", value: "18,1 cm" },
  { title: "Comprimento", value: "17,8 cm" },
  { title: "Largura", value: "7,8 cm" },
  { title: "Peso", value: "260g" },
  { title: "Formato", value: "over ear (em cima do ouvido)" },
  { title: "Portas", value: "Bluetooth, Sem fio" },
  { title: "Compatibilidade com Bluetooth", value: "Bluetooth 5.3" },
  { title: "Fonte de energia", value: "Bateria" },
  { title: "Baterias", value: "Íon de lítio recarregáveis" },
  { title: "Conectividade", value: "Bluetooth® Class 1" },
  { title: "Áudio", value: "USB-C" },
  { title: "Entrada analógica", value: "3,5 mm para fontes de áudio com cabo" },
  { title: "Bateria Dallas® (uma recarga)", value: "Até 40 horas de som" },
  { title: "Fast Fuel", value: "10 minutos = até 4 horas de som" },
  { title: "Controles no fone", value: "Botão “b” para músicas e chamadas" },
  { title: "Controle de volume", value: "Integrado" },
  {
    title: "Botão multifunção",
    value:
      "Alternar entre modos de áudio, Equalização Adaptativa, ligar e emparelhar",
  },
  {
    title: "Embalagem",
    value: "100% feita de fibra proveniente de florestas sustentáveis",
  },
];

const Specs = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      className="pt-40 size-full flex items-start max-lg:flex-col max-lg:px-5 max-lg:pt-20"
      id="especificacoes"
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
            Especificações
          </motion.h1>
        </div>

        <div className=" pr-10 max-lg:p-0">
          {specs.map((spec, i) => (
            <div key={i} className="border-b border-brd overflow-hidden">
              <motion.div
                className="w-full h-fit py-4 flex justify-between gap-6"
                variants={textSlideAnim}
                initial="initial"
                animate={inView ? "animate" : ""}
                custom={i}
              >
                <p className="text-p/75 font-neue-regular text-[16px] leading-[1.2] ">
                  {spec.title}
                </p>

                <p className="max-w-[400px] text-p font-neue-regular text-[16px] leading-[1.2] text-end">
                  {spec.value}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;
