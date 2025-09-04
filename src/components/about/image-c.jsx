import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const clipAnim = {
  initial: { clipPath: "inset(100% 0% 0% 0%)" },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};
const ImageC = ({ img }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div className="w-full pt-40 pr-10 max-lg:px-5 max-lg:pt-20" ref={ref}>
      <motion.figure
        className="size-full"
        variants={clipAnim}
        animate={inView ? "animate" : "initial"}
      >
        <Image
          src={img}
          width={2000}
          height={2000}
          className="size-full object-cover rounded-[1rem]"
        />
      </motion.figure>
    </div>
  );
};

export default ImageC;
