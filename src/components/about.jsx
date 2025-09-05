import { motion } from "framer-motion";
import Overview from "./about/overview";
import Highlights from "./about/highlights";
import ImageC from "./about/image-c";
import Specs from "./about/specs";
import PremiumXP from "./about/premium-xp";
import { textSlideAnim } from "../anim/anim";
import { useInView } from "react-intersection-observer";
import Slides from "./about/slides";

const asideLinks = [
  { label: "Visão geral", href: "#visao-geral" },
  { label: "Destaques", href: "#destaques" },
  { label: "Experiência Premium", href: "#experiencia-premium" },
  { label: "Especificações", href: "#especificacoes" },
];

const paragraphs = [
  "Eleve sua experiência com o Dallas®. Design premium, tecnologia",
  "de ponta e áudio de alta definição em um só produto.",
  "Cancelamento de ruído inteligente, bateria de longa duração e",
  "materiais de alta qualidade para máximo conforto.",
];

const AsideNav = ({ lenis }) => {
  const handleLinkClick = (target) => {
    if (!target || !lenis?.current) return;
    lenis.current.scrollTo(target, {
      offset: 0,
      duration: 0.75,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
  };

  return (
    <>
      <aside
        className="max-lg:hidden relative pt-20 flex flex-col items-start gap-2 
        max-lg:w-full max-lg:justify-between max-lg:mt-0 max-lg:flex-row max-lg:py-4 max-lg:bg-s"
      >
        {asideLinks.map((link, i) => (
          <button
            key={i}
            onClick={() => handleLinkClick(link.href)}
            className="relative mb-2 text-p text-[16px] font-neue-regular text-start leading-[1] group cursor-pointer"
          >
            {link.label}
            <div className="absolute bottom-0 bg-p w-0 h-[1px] transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
      </aside>

      <aside className="max-lg:grid hidden w-full px-5 py-5 bg-s grid-cols-2 items-start gap-2">
        {asideLinks.map((link, i) => (
          <div key={i} className="w-fit">
            <button
              onClick={() => handleLinkClick(link.href)}
              className="relative mb-2 text-p text-[16px] font-neue-regular text-start leading-[1] group cursor-pointer"
            >
              {link.label}
              <div className="absolute bottom-0 bg-p w-0 h-[1px] transition-all duration-300 group-hover:w-full" />
            </button>
          </div>
        ))}
      </aside>
    </>
  );
};

const About = ({ onClick, lenis }) => {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section className="pt-40 pb-20 h-full max-lg:pt-20" id="sobre" ref={ref}>
      <div className="px-10 max-lg:px-5">
        <div className="w-full h-fit overflow-hidden">
          <motion.h1
            className="text-p font-neue-regular text-[64px] leading-[1.08] tracking-[-0.03em] max-lg:text-[48px]"
            variants={textSlideAnim}
            initial="initial"
            animate={inView ? "animate" : ""}
          >
            Reserve o seu <span className="text-t">Dallas®</span> agora
          </motion.h1>
        </div>
        <div className="w-full h-fit overflow-hidden max-lg:mb-8">
          <motion.h1
            className=" text-p font-neue-regular text-[64px] leading-[1.08] tracking-[-0.03em] max-lg:text-[48px]"
            variants={textSlideAnim}
            initial="initial"
            animate={inView ? "animate" : ""}
          >
            mesmo!
          </motion.h1>
        </div>
      </div>
      <div className="relative flex items-start justify-between">
        <div className="flex-[1] sticky top-0 px-10 max-lg:hidden">
          <AsideNav lenis={lenis} />
        </div>

        <div className="flex-[3] pt-20 size-full flex flex-col items-end">
          <div className="relative px-10 flex flex-col items-start max-lg:mb-12 max-lg:px-5">
            {paragraphs.map((paragraph, i) => (
              <div className="h-fit overflow-hidden" key={i}>
                <motion.p
                  className="text-p font-neue-regular text-[20px] leading-[1.2em] tracking-[-0.01em]"
                  variants={textSlideAnim}
                  initial="initial"
                  animate={inView ? "animate" : ""}
                  custom={i}
                >
                  {paragraph}
                </motion.p>
              </div>
            ))}

            <br />

            <div className="h-fit overflow-hidden">
              <motion.p
                className="text-p font-neue-regular text-[20px] leading-[1.2em] tracking-[-0.01em]"
                variants={textSlideAnim}
                initial="initial"
                animate={inView ? "animate2" : ""}
              >
                Garanta já o seu e descubra um novo padrão de som, praticidade e
                estilo.
              </motion.p>
            </div>

            <p className="mb-18 text-p font-neue-regular text-[20px] leading-[1.2em] tracking-[-0.01em]"></p>

            <button
              className="w-[200px] h-[45px] 
                text-s text-[16px] font-neue-medium
                bg-p rounded-full 
                flex items-center justify-center
               hover:bg-p/75 transition-all duration-300 cursor-pointer"
              onClick={onClick}
            >
              Reservar
            </button>
          </div>

          <div className="w-full hidden max-lg:block sticky top-0 z-50">
            <AsideNav lenis={lenis} />
          </div>

          <Slides />
          <Overview />
          <Highlights />
          <ImageC
            img="/images/headset-white-explode-view.jpg"
            className="size-full object-cover rounded-[1rem]"
          />
          <PremiumXP />
          <Specs />
          <ImageC
            img="/images/headset-black.jpg"
            className="w-full h-[75vh] object-cover rounded-[1rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
