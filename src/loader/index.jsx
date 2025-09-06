import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const textSlideAnim = {
  initial: { y: "100%" },
  animate: {
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export default function Loading({ children }) {
  const slide = useAnimation();
  const text = useAnimation();

  useEffect(() => {
    async function runSequence() {
      await text.start("animate");
      await slide.start({
        background: "#fb2c36",
        transition: { ease: [0.76, 0, 0.24, 1], delay: 0.5 },
      });
      slide.start({
        bottom: "100%",
        transition: {
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        },
      });
      text.start("exit");
    }

    runSequence();
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-[100dvh] flex z-[1000] select-none pointer-events-none overflow-hidden ">
        <div className="size-full overflow-hidden">
          <motion.div
            initial={{ bottom: "0%", background: "#000" }}
            animate={slide}
            className="relative size-full"
          />
        </div>

        <div className="absolute size-full flex items-center justify-center">
          <div className="h-fit overflow-hidden">
            <motion.p
              className="text-s font-neue-regular text-[4rem] leading-[1.08] tracking-[-0.03em] max-lg:text-[3rem]"
              variants={textSlideAnim}
              initial="initial"
              animate={text}
            >
              Dallas®
            </motion.p>
          </div>
        </div>
      </div>

      {children}
    </>
  );
}
