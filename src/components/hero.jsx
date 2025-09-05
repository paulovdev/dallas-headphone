import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const textSlideAnim = {
  initial: { y: "100%" },
  animate: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 1.5 + 0.075 * i,
    },
  }),
  animate2: {
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 1.5,
    },
  },
};
const phrases = [
  "O primeiro headset inteligente que se adapta a você.",
  "Som imersivo e bateria que dura a semana inteira.",
  "Simples, prático e feito para elevar sua experiência.",
];

const Hero = ({ onClick }) => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <section className="overflow-hidden" id="hero" ref={container}>
      <motion.div
        className="relative w-screen h-[100dvh] p-10 overflow-hidden max-tablet:h-[100dvh] max-lg:p-5"
        style={{ y }}
      >
        <div className="absolute inset-0 w-screen h-[100dvh] z-[-2]">
          <figure className="size-full overflow-hidden">
            <img
              src="/images/headset-black.jpg"
              className="size-full object-cover brightness-75"
              fill
              alt="Dallas-background"
            />
          </figure>
        </div>

        <div className="relative size-full flex items-center justify-center max-lg:flex-col max-lg:items-end">
          <div className="size-full hidden max-lg:block"></div>
          <div className="w-full flex items-center justify-start max-lg:h-full">
            <div className="max-w-[500px] w-full z-20">
              <div className="mb-8">
                {phrases.map((phrase, i) => (
                  <div key={i} className="overflow-hidden w-full">
                    <motion.p
                      className="text-s font-neue-regular text-[20px] leading-[1.2em] tracking-[-0.01em]"
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

              <button
                className="w-[200px] h-[45px] 
                text-s text-[16px] font-neue-medium
                bg-t rounded-full 
                flex items-center justify-center
               hover:bg-t/75 transition-all duration-300  cursor-pointer"
                onClick={onClick}
              >
                Reservar
              </button>
            </div>
          </div>
          <div className="h-full flex flex-col items-start justify-end">
            <div className="w-full h-fit overflow-hidden">
              <motion.h1
                className="text-s font-neue-regular text-[64px] leading-[1.08] tracking-[-0.03em] max-lg:text-[48px]"
                variants={textSlideAnim}
                initial="initial"
                animate="animate2"
              >
                Dallas®
              </motion.h1>
            </div>
            <div className="w-full h-fit overflow-hidden">
              <motion.h1
                className=" text-t font-neue-regular text-[64px] leading-[1.08] tracking-[-0.03em] max-lg:text-[48px]"
                variants={textSlideAnim}
                initial="initial"
                animate="animate2"
              >
                HeadPhone
              </motion.h1>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
