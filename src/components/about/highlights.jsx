import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiHeadphones, FiBluetooth, FiSettings } from "react-icons/fi";
import { MdBattery5Bar } from "react-icons/md";

const textSlideAnim = {
  initial: { y: "100%" },
  animate: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.25 + 0.05 * i,
    },
  }),
  animate2: {
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.25,
    },
  },
};

const highlights = [
  {
    icon: <FiHeadphones className="text-[1.75rem] text-t" />,
    descriptions: [
      "The custom Dallas® acoustic platform delivers an immersive",
      "sound experience designed for pure audio enjoyment.",
      "Each exclusive 40mm driver is engineered to provide",
      "exceptional clarity and precision.",
    ],
  },
  {
    icon: <MdBattery5Bar className="text-[1.75rem] text-t" />,
    descriptions: [
      "Enjoy up to 25 hours of wireless playback for nonstop fun.",
      "Recharge in just 2 hours with the convenient USB Type-C cable.",
      "A quick 10-minute charge gives you an extra 1 hour of music.",
    ],
  },
  {
    icon: <FiBluetooth className="text-[1.75rem] text-t" />,
    descriptions: [
      "High-performance Bluetooth connectivity for a seamless experience.",
      "Ultra-low latency, perfect for gaming and videos.",
    ],
  },
  {
    icon: <FiSettings className="text-[1.75rem] text-t" />,
    descriptions: [
      "Intuitive on-headset controls designed for simplicity.",
      "Easily connect and manage multiple devices simultaneously.",
    ],
  },
];

const Highlights = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <section
      className="pt-40 size-full flex items-start gap-12 max-lg:flex-col max-lg:px-5 max-lg:pt-20"
      id="highlights"
      ref={ref}
    >
      <div className="w-full">
        <div className="mb-10 w-full h-fit overflow-hidden">
          <motion.h1
            className="text-p font-neue-regular text-[4rem] leading-[1.08] tracking-[-0.03em] max-lg:text-[3rem]"
            variants={textSlideAnim}
            initial="initial"
            animate={inView ? "animate2" : ""}
          >
            Highlights
          </motion.h1>
        </div>

        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
          {highlights.map((highlight, i) => (
            <div className="mb-8 w-full h-fit overflow-hidden" key={i}>
              <motion.div
                className="mb-8 flex items-center gap-2"
                variants={textSlideAnim}
                initial={{ filter: "blur(16px)" }}
                animate={{
                  filter: inView ? "blur(0px)" : "blur(16px)",
                  transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
                }}
                custom={i}
              >
                {highlight.icon}
              </motion.div>

              <div className="w-full max-md:max-w-full">
                {highlight.descriptions.map((line, idx) => (
                  <div className="w-full h-fit overflow-hidden" key={idx}>
                    <motion.p
                      className="text-p/75 font-neue-regular text-[1rem] leading-[1.2em]"
                      variants={textSlideAnim}
                      initial="initial"
                      animate={inView ? "animate" : ""}
                      custom={idx}
                    >
                      {line}
                    </motion.p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
