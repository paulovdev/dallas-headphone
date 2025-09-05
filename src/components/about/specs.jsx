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
  ////
  { title: "Driver", value: "Dynamic 40 mm com imã de neodímio" },
  { title: "Resposta de frequência", value: "20 Hz – 20 kHz" },
  { title: "Impedância", value: "32 Ω" },
  { title: "Sensibilidade", value: "98 dB ± 3 dB" },
  {
    title: "Cancelamento de ruído ativo (ANC)",
    value: "Sim, ajustável em 3 níveis",
  },
  { title: "Modo ambiente", value: "Sim, para ouvir sons externos" },
  { title: "Codec suportado", value: "SBC, AAC, aptX, aptX Adaptive" },
  { title: "Microfone", value: "Duplo com cancelamento de ruído" },
  {
    title: "Conexão simultânea",
    value: "Multi-device pairing (2 dispositivos ao mesmo tempo)",
  },
  { title: "Tempo de carregamento", value: "1,5 horas para carga completa" },
  { title: "Autonomia em standby", value: "Até 60 dias" },
  {
    title: "Material das almofadas",
    value: "Espuma de memória com couro sintético premium",
  },
  { title: "Arco de cabeça", value: "Ajustável, com reforço em aço" },
  { title: "Dobrável", value: "Sim, para transporte fácil" },
  { title: "Resistência à água", value: "IPX4 – respingos e suor" },
  {
    title: "Aplicativo compatível",
    value: "Sim, para ajustes de equalização e firmware",
  },
  { title: "Equalizador", value: "Personalizável via app" },
  { title: "Indicador de bateria", value: "LED + voz" },
  { title: "Peso do cabo USB-C", value: "1,2 m removível" },
  { title: "Cabo auxiliar", value: "Incluído, 1,2 m" },
  { title: "Cores disponíveis", value: "Preto, Cinza, Azul" },
  {
    title: "Design eco-friendly",
    value: "Materiais recicláveis e embalagem sustentável",
  },
  {
    title: "Compatibilidade de assistentes de voz",
    value: "Siri, Google Assistant, Alexa",
  },
  { title: "Modo gaming", value: "Baixa latência (<40ms)" },
  { title: "Cancelamento de eco", value: "Sim, para chamadas nítidas" },
  { title: "Botões programáveis", value: "Sim, pelo app" },
  {
    title: "Função de pausa automática",
    value: "Ao remover o headphone dos ouvidos",
  },
  { title: "Função de localização", value: "Via app em caso de perda" },
  { title: "Garantia", value: "2 anos" },
  { title: "Certificação", value: "RoHS, CE, FCC" },
  { title: "Temperatura de operação", value: "-10°C a 45°C" },
  { title: "Armazenamento recomendado", value: "-20°C a 60°C" },
  { title: "Compatível com PC, Mac, iOS e Android", value: "Sim" },
  { title: "Suporte de firmware OTA", value: "Sim, atualizações automáticas" },
  { title: "Vibração para notificações", value: "Opcional via app" },
  { title: "Música offline", value: "Sim, via armazenamento interno opcional" },
  {
    title: "Tecnologia de resfriamento das orelhas",
    value: "Sim, para longas sessões",
  },
  { title: "Personalização de luzes LED", value: "Sim, via app" },
];

const Specs = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
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
