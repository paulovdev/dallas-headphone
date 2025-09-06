import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./button";

const textSlideAnim = {
  initial: { y: "100%" },
  animate: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 2 + 0.075 * i,
    },
  }),
  animate2: {
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 2,
    },
  },
};
const phrases = [
  "The first smart headset that adapts to you.",
  "Immersive sound and a battery that lasts all week.",
  "Simple, practical, and designed to elevate your",
  " experience.",
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
                      className="text-s font-neue-regular text-[1.25rem] leading-[1.2em] tracking-[-0.01em]"
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
              <Button
                text="Book"
                inBgColor="bg-t"
                outBgColor="bg-s"
                inTextColor="text-p"
                outTextColor="text-s"
                onClick={onClick}
              />
            </div>
          </div>
          <div className="h-full flex flex-col items-start justify-end">
            <div className="w-full h-fit overflow-hidden">
              <motion.h1
                className="text-s font-neue-regular text-[4rem] leading-[1.08] tracking-[-0.03em] max-lg:text-[3rem]"
                variants={textSlideAnim}
                initial="initial"
                animate="animate2"
              >
                Dallas®
              </motion.h1>
            </div>
            <div className="w-full h-fit overflow-hidden">
              <motion.h1
                className=" text-t font-neue-regular text-[4rem] leading-[1.08] tracking-[-0.03em] max-lg:text-[3rem]"
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
