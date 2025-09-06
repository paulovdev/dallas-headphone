import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { textSlideAnim } from "../anim/anim";
import Button from "./button";

const ReserveWrapper = ({ onClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const phrases = ["Still interested?", " Book your Dallas® now"];

  return (
    <div className="py-50 h-fit bg-t max-lg:px-5 max-lg:py-20" ref={ref}>
      <div className="relative  max-w-[800px] mx-auto text-center flex flex-col items-center">
        {phrases.map((phrase, i) => (
          <div className="w-full h-fit overflow-hidden" key={i}>
            <motion.h2
              className="text-s font-neue-regular text-[4rem] leading-[1.08] tracking-[-0.03em] max-lg:text-[2.625rem]"
              variants={textSlideAnim}
              initial="initial"
              animate={inView ? "animate" : ""}
              custom={i}
            >
              {phrase}
            </motion.h2>
          </div>
        ))}
        <div className="mb-12 "></div>

        <Button
          text="Book"
          inBgColor="bg-s"
          outBgColor="bg-p"
          inTextColor="text-s"
          outTextColor="text-p"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default ReserveWrapper;
