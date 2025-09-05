import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const textSlideAnim = {
  initial: { y: "100%" },
  animate: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.5 + 0.075 * i,
    },
  }),
  exit: (i) => ({
    y: "100%",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.075 * i,
    },
  }),
};

const getMenuAnim = (isMobile) => ({
  initial: {
    width: "60px",
    height: "60px",
    top: "0rem",
    right: "0rem",
  },
  animate: {
    width: isMobile ? "485px" : "450px",
    height: isMobile ? "350px" : "450px",
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

const navLinks = [
  { href: "#hero", label: "Dallas®" },
  { href: "#sobre", label: "Sobre" },
  { href: "Reserve agora", label: "Reserve agora" },
  { href: "#footer", label: "Contato" },
];

const Menu = ({ menu, setMenu, reserveOpen, lenis }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (nav) => {
    if (nav === "Reserve agora") {
      reserveOpen();
      setMenu(false);
    }
    if (!nav || !lenis?.current) return;
    lenis.current.scrollTo(nav, {
      offset: 0,
      duration: 0.75,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    setMenu(false);
  };

  return (
    <>
      <div className="fixed top-0 right-0 p-10 flex items-center justify-end gap-8 z-100 max-lg:p-5">
        <motion.div
          className="relative bg-s border border-brd z-10 rounded-[3rem] pointer-events-none max-lg:rounded-[2.5rem]"
          key={menu}
          {...getMenuAnim(isMobile)}
        >
          <div className="mt-20 px-10 flex flex-col items-start gap-4 max-lg:mt-12 max-lg:px-6">
            {navLinks.map((nav, i) => (
              <div
                key={i}
                className="relative w-fit h-fit overflow-hidden pointer-events-auto group"
              >
                <motion.p
                  custom={i}
                  variants={textSlideAnim}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onClick={() => handleLinkClick(nav.href)}
                  className="text-p font-neue-regular text-[62px] leading-[1.08] tracking-[-0.03em] cursor-pointer max-lg:text-[52px] max-md:text-[48px]"
                >
                  {nav.label}
                </motion.p>
                <div className="absolute bottom-0 bg-p w-0 h-[3px] transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        className="fixed top-0 left-0 w-screen h-[100dvh] bg-p/50 z-90 backdrop-blur-[1rem]"
        {...overlayAnim}
        onClick={() => setMenu(false)}
      />
    </>
  );
};

export default Menu;
