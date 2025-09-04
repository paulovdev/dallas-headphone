import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { textSlideAnim } from "../anim/anim";

const ReserveWrapper = ({ onClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const phrases = ["Ainda interessado?", " Reserve já o seu Dallas®"];
  return (
    <div className="py-50 h-fit bg-t max-lg:px-5 max-lg:py-20" ref={ref}>
      <div className="relative max-w-[800px] mx-auto text-center flex flex-col items-center">
        {phrases.map((phrase, i) => (
          <div className="w-full h-fit overflow-hidden" key={i}>
            <motion.h2
              className="text-s font-neue-regular text-[64px] leading-[1.08] tracking-[-0.03em] max-lg:text-[42px]"
              variants={textSlideAnim}
              initial="initial"
              animate={inView ? "animate" : ""}
              custom={i}
            >
              {phrase}
            </motion.h2>
          </div>
        ))}

        <button
          className="mt-8 w-[200px] h-[45px] 
                text-p text-[16px] font-neue-medium
                bg-s rounded-full 
                flex items-center justify-center
               hover:bg-s/75 transition-all duration-300  cursor-pointer"
          onClick={onClick}
        >
          Reservar
        </button>
      </div>
    </div>
  );
};

export default ReserveWrapper;
