import { useMousePosition } from "@/hooks/useMousePosition";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const clipAnim = {
  initial: { clipPath: "inset(100% 0% 0% 0%)" },
  animate: (i) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.15 * i,
    },
  }),
};
export const textSlideAnim = {
  initial: { y: "100%" },
  animate: {
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.15,
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
const slides = [
  "/images/headset-slide-5.jpg",
  "/images/headset-slide-2.jpg",
  "/images/headset-slide-3.jpg",
  "/images/headset-slide-4.jpg",
  "/images/headset-slide-1.jpg",
];

const Slides = () => {
  const [hovered, setHovered] = useState(null);
  const { x, y } = useMousePosition();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <>
      <div className="size-full pt-20" ref={ref}>
        <div
          className="max-lg:pl-4 pr-4  flex items-start gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(null)}
        >
          {slides.map((img, i) => (
            <motion.figure
              key={i}
              className="flex-shrink-0 snap-center"
              variants={clipAnim}
              animate={inView ? "animate" : "initial"}
              custom={i}
            >
              <Image
                src={img}
                width={2000}
                height={2000}
                className="w-[500px] h-[325px] object-cover rounded-[1rem] max-lg:w-[350px] max-lg:h-[250px]"
                alt={`Slide ${i + 1}`}
              />
            </motion.figure>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        {hovered && (
          <motion.div
            className="fixed bg-p/50 rounded-full backdrop-blur-[1rem] z-1000"
            style={{
              left: x,
              top: y,
              translateX: "-50%",
              translateY: "-50%",
              pointerEvents: "none",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.25, ease: [0.76, 0, 0.24, 1] },
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: {
                duration: 0.25,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.5,
              },
            }}
          >
            <motion.div className="w-40 h-40 flex items-center justify-center gap-2">
              <div className="h-fit overflow-hidden">
                <motion.p
                  className="text-s font-neue-medium text-[1rem]"
                  {...textSlideAnim}
                >
                  Drag
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Slides;
