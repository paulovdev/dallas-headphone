import { motion } from "framer-motion";

const horizontalAnimation = {
  initial: {
    left: "0%",
  },

  enter: (custom) => ({
    left: "100%",

    transition: {
      duration: 0.45,
      ease: [0.215, 0.61, 0.355, 1],
      delay: 0.07 * custom,
    },
    transitionEnd: { left: "0%", width: 0 },
  }),
  exit: (custom) => ({
    left: "0%",
    width: "100%",
    transition: {
      duration: 0.45,
      ease: [0.215, 0.61, 0.355, 1],
      delay: 0.07 * custom,
    },
  }),
};

export default function HorizontalTransition({ children }) {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex z-[1000] pointer-events-none select-none overflow-hidden">
        <div className={`w-full grid grid-cols-4`}>
          {[...Array(4)].map((_, i) => (
            <div className="size-full overflow-hidden" key={i}>
              <motion.div
                custom={i + 3}
                variants={horizontalAnimation}
                initial="initial"
                animate="enter"
                exit="exit"
                className="relative size-full bg-red-500"
              />
            </div>
          ))}
        </div>
      </div>

      {children}
    </>
  );
}
