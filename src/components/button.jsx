import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const textSlideAnim = {
  initial: {
    y: "0%",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  animate: {
    y: "-50%",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
const clipAnim = {
  initial: { clipPath: "inset(0% 0% 100% 0%)" },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    clipPath: "inset(100% 0% 0% 0%)",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
const Button = ({
  text,
  inBgColor,
  outBgColor,
  inTextColor,
  outTextColor,
  onClick,
}) => {
  const [hover, setHover] = useState(null);
  return (
    <AnimatePresence mode="wait">
      <button
        className={`relative w-[200px] h-[45px] 
                ${inBgColor} 
                  rounded-full 
                flex items-center justify-center
                cursor-pointer overflow-hidden`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(null)}
        onClick={onClick}
      >
        <div className="h-[15px] overflow-hidden z-20">
          <motion.div
            className="flex flex-col "
            variants={textSlideAnim}
            initial="initial"
            animate={hover ? "animate" : "exit"}
          >
            <p
              className={` ${
                hover ? inTextColor : outTextColor
              } text-[1rem] font-neue-medium leading-[1]`}
            >
              {text}
            </p>
            <p
              className={` ${
                hover ? inTextColor : outTextColor
              } text-[1rem] font-neue-medium leading-[1]`}
            >
              {text}
            </p>
          </motion.div>
        </div>
        <motion.div
          className={`absolute inset-0   ${outBgColor} z-10`}
          variants={clipAnim}
          initial="initial"
          animate={hover ? "animate" : "exit"}
        />
      </button>
    </AnimatePresence>
  );
};

export default Button;
