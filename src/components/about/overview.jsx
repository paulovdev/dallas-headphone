import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { textSlideAnim } from "../../anim/anim";

const overview = [
  {
    title: "Custom Dallas® Acoustic Platform",
    descriptions: [
      "The custom Dallas® acoustic platform delivers an immersive sound experience.",
      "Each exclusive 40mm driver is engineered to provide exceptional clarity",
      "with virtually zero distortion, even at high volumes.",
      " ",
      "This represents up to an 80% improvement over the previous Dallas® model,",
      "enhancing overall audio fidelity. The integrated digital processor optimizes",
      "the final frequency response to deliver a powerful, well-balanced sound profile",
      "while highlighting subtle details in everything you listen to.",
    ],
  },
  {
    title: "Active Noise Cancellation & Transparency Mode",
    descriptions: [
      "Dallas® uses advanced technology to eliminate external noise,",
      "creating an immersive listening experience. You can switch to",
      "Transparency Mode to hear your surroundings without removing your headphones.",
    ],
  },
];

const Overview = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <section
      className="pt-20 size-full flex items-start gap-12 max-lg:flex-col max-lg:px-5"
      id="overview"
      ref={ref}
    >
      <div className="flex-[2] max-w-[600px] w-full">
        <div className="mb-10 w-full h-fit overflow-hidden">
          <motion.h1
            className="text-p font-neue-regular text-[4rem] leading-[1.08] tracking-[-0.03em] max-lg:text-[3rem]"
            variants={textSlideAnim}
            initial="initial"
            animate={inView ? "animate2" : ""}
          >
            Overview
          </motion.h1>
        </div>

        {overview.map((section, i) => (
          <div key={i} className="mb-8">
            <div className="mb-2 w-full h-fit overflow-hidden">
              <motion.h3
                className="text-p font-neue-regular text-[1.5rem] leading-[1.2em] "
                variants={textSlideAnim}
                initial="initial"
                animate={inView ? "animate" : ""}
                custom={i}
              >
                {section.title}
              </motion.h3>
            </div>
            <div className="w-full h-fit overflow-hidden">
              {section.descriptions.map((line, i) => (
                <>
                  <div className="w-full h-fit overflow-hidden">
                    <motion.p
                      key={i}
                      className="text-p/75 font-neue-regular text-[1rem] leading-[1.2em]"
                      variants={textSlideAnim}
                      initial="initial"
                      animate={inView ? "animate" : ""}
                      custom={i}
                    >
                      {line}
                    </motion.p>
                  </div>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
