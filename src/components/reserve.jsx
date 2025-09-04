import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const textSlideAnim = {
  initial: { y: "100%" },
  animate: {
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.5,
    },
  },
  animate2: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.75 + 0.075 * i,
    },
  }),
  exit: {
    y: "100%",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const clipAnim = {
  initial: { clipPath: "inset(100% 0% 0% 0%)" },
  animate: (custom) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.5 + custom,
    },
  }),

  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const getReserveAnim = (isMobile) => ({
  initial: {
    width: "60px",
    height: "60px",
    top: "0rem",
    right: "0rem",
  },
  animate: {
    width: isMobile ? "485px" : "520px",
    height: isMobile ? "98.5dvh" : "95.5dvh",
    top: isMobile ? "-0.75rem" : "-1.25rem",
    right: isMobile ? "-0.75rem" : "-1.25rem",
    transition: {
      duration: 0.75,
      type: "linear",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    width: "60px",
    height: "60px",
    top: "0rem",
    right: "0rem",
    opacity: 0,
    transition: {
      duration: 0.75,
      type: "linear",
      ease: [0.76, 0, 0.24, 1],
      delay: 0.5,
    },
  },
});

const overlayAnim = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    delay: 0.5,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const opacityAnim = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

const subTitle = [
  "Mais do que um simples copo, ele redefine a forma",
  "como você consome suas bebidas.",
];

const Reserve = ({ reserve, reserveClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 p-10 flex items-center justify-end gap-8 z-100 pointer-events-none max-lg:p-5">
        <motion.div
          className="relative bg-s border border-brd z-10 rounded-[3rem] pointer-events-none max-lg:rounded-[2.5rem]"
          key={reserve}
          {...getReserveAnim(isMobile)}
        >
          <div className="mt-20 px-5 flex flex-col items-start justify-between gap-2 pointer-events-auto">
            <div className="mb-8 size-full overflow-hidden">
              <div className="h-fit overflow-hidden">
                <motion.h1
                  className="text-p font-neue-regular text-[64px] leading-[1.08] tracking-[-0.03em]"
                  variants={textSlideAnim}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  Dallas®
                </motion.h1>
              </div>
              <div className="mb-6 h-fit overflow-hidden">
                <motion.h1
                  className=" text-t font-neue-regular text-[64px] leading-[1.08] tracking-[-0.03em]"
                  variants={textSlideAnim}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  HeadPhone
                </motion.h1>
              </div>
              {subTitle.map((phrases, i) => (
                <div className="h-fit overflow-hidden" key={i}>
                  <motion.p
                    className=" text-p/75 font-neue-regular text-[20px] leading-[1.2em] tracking-[-0.01em] text-end"
                    custom={i}
                    variants={textSlideAnim}
                    initial="initial"
                    animate="animate2"
                    exit="exit"
                  >
                    {phrases}
                  </motion.p>
                </div>
              ))}

              <div className="my-8 size-full">
                <div className="h-fit overflow-hidden">
                  <motion.p
                    className=" text-p font-neue-medium text-[20px] leading-[1.2em] tracking-[-0.01em]"
                    variants={textSlideAnim}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    (1) Qual cor você gostaria de reservar?
                  </motion.p>
                </div>
                <div className="size-full flex items-center gap-2">
                  <motion.figure
                    className="size-full flex flex-col items-center justify-center  cursor-pointer"
                    variants={clipAnim}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={0.25}
                  >
                    <Image
                      src="/images/headset-black.jpg"
                      width={1000}
                      height={1000}
                      alt=""
                      className="mb-2 w-[225px] h-[130px] rounded-[2.5rem] object-cover"
                    />
                    <span className="text-p font-neue-medium text-[12px] leading-[1]">
                      (COR PRETA)
                    </span>
                  </motion.figure>
                  <motion.figure
                    className="size-full pt-12 flex flex-col items-center justify-center  cursor-pointer"
                    variants={clipAnim}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={0.5}
                  >
                    <Image
                      src="/images/headset-white.jpg"
                      width={1000}
                      height={1000}
                      alt=""
                      className="mb-2 w-[225px] h-[130px] rounded-[2.5rem] object-cover"
                    />
                    <span className="text-p font-neue-medium text-[12px] leading-[1]">
                      (COR BRANCA)
                    </span>
                  </motion.figure>
                </div>
              </div>

              <div className="size-full">
                <div className="h-fit overflow-hidden">
                  <motion.p
                    className=" text-p font-neue-medium text-[20px] leading-[1.2em] tracking-[-0.01em]"
                    variants={textSlideAnim}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    (2) Quanto tempo você gostaria de ficar e quando?
                  </motion.p>
                </div>
              </div>
            </div>
            <motion.div
              className="w-full h-[240px] flex items-end justify-end"
              variants={opacityAnim}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="pl-5 pr-5 w-full h-[100px] bg-[#fafafa] rounded-[2.75rem] flex items-center gap-12">
                <div className="flex-[2]">
                  <p className="text-p font-neue-regular text-[20px] leading-[1.2em] tracking-[-0.01em]">
                    R$999,99 no Pix
                  </p>
                  <p className="text-p font-neue-regular text-[20px] leading-[1.2em] tracking-[-0.01em]">
                    ou 10x R$100,00 sem juros
                  </p>
                </div>
                <button
                  className="flex-[1.5] w-full h-[50px] 
                text-s text-[16px] font-neue-medium
                bg-p rounded-full 
                flex items-center justify-center
               hover:bg-p/75 transition-all duration-300  cursor-pointer"
                >
                  Reservar
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="fixed top-0 left-0 w-screen h-[100dvh] bg-p/50 z-90 backdrop-blur-[1rem]"
        {...overlayAnim}
        onClick={reserveClose}
      />
    </>
  );
};
export default Reserve;
