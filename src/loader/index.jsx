import { motion } from "framer-motion";

const horizontalAnimation = {
  initial: {
    bottom: "0%",
  },

  enter: {
    bottom: "100%",

    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 1,
    },
    transitionEnd: { bottom: "0%", width: 0 },
  },
  exit: {
    bottom: "0%",
    width: "100%",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.07,
    },
  },
};

export default function HorizontalTransition({ children }) {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-[100dvh] flex z-[1000] pointer-events-none select-none overflow-hidden">
        <div className="size-full overflow-hidden">
          <motion.div
            variants={horizontalAnimation}
            initial="initial"
            animate="enter"
            exit="exit"
            className="relative size-full bg-t"
          />
        </div>
      </div>

      {children}
    </>
  );
}
