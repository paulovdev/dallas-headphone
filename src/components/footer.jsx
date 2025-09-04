import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { textSlideAnim } from "../anim/anim";

const footerLinks = {
  site: [
    { label: "Sobre", href: "#sobre" },
    { label: "Reserve já o seu!", href: null, onClick: true },
  ],
  product: [
    { label: "Visão geral", href: "#visao-geral" },
    { label: "Destaques", href: "#destaques" },
    { label: "Experiência Premium", href: "#experiencia-premium" },
    { label: "Especificações", href: "#especificacoes" },
  ],
  socials: [
    { label: "Instagram", href: "" },
    { label: "X", href: "" },
    { label: "Mercado Livre", href: "" },
    { label: "Amazon", href: "" },
  ],
};
const Footer = ({ onClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <footer
      className="relative w-full p-10 h-[75dvh] bg-p max-lg:h-full max-lg:px-5"
      id="footer"
      ref={ref}
    >
      <div className="pt-10 size-full flex flex-col">
        <div className="size-full flex items-start max-lg:flex-col max-lg:mb-12">
          <div className="flex-[2] flex items-start justify-start max-lg:w-full max-lg:mb-12 max-lg:justify-between max-lg:flex-none">
            <div className="flex-[1] flex flex-col items-start justify-start max-lg:mb-8">
              <div className="mb-8 h-fit overflow-hidden">
                <motion.p
                  className="text-s/75 font-neue-regular text-[20px] leading-[1] tracking-[-0.01em]"
                  variants={textSlideAnim}
                  initial="initial"
                  animate={inView ? "animate2" : ""}
                >
                  Navegue pelo site:
                </motion.p>
              </div>

              {footerLinks.site.map((item, i) =>
                item.onClick ? (
                  <div
                    key={i}
                    className="relative mb-4 h-fit overflow-hidden group"
                    onClick={onClick}
                  >
                    <motion.p
                      className=" text-s font-neue-regular text-[20px] leading-[1] tracking-[-0.01em] cursor-pointer"
                      variants={textSlideAnim}
                      initial="initial"
                      animate={inView ? "animate" : ""}
                      custom={i}
                    >
                      <a href={item.href}>{item.label}</a>
                    </motion.p>
                    <div className="absolute bottom-0 bg-s w-0 h-[1px] transition-all duration-300 group-hover:w-full" />
                  </div>
                ) : (
                  <div
                    key={i}
                    className="relative mb-4 h-fit overflow-hidden group"
                  >
                    <motion.p
                      className="text-s font-neue-regular text-[20px] leading-[1] tracking-[-0.01em] cursor-pointer"
                      variants={textSlideAnim}
                      initial="initial"
                      animate={inView ? "animate" : ""}
                      custom={i}
                    >
                      <a href={item.href}>{item.label}</a>
                    </motion.p>
                    <div className="absolute bottom-0 bg-s w-0 h-[1px] transition-all duration-300 group-hover:w-full" />
                  </div>
                )
              )}
            </div>

            <div className="flex-[2] flex flex-col items-start justify-start  max-lg:flex-none">
              <div className="mb-8 h-fit overflow-hidden">
                <motion.p
                  className="text-s/75 font-neue-regular text-[20px] leading-[1] tracking-[-0.01em]"
                  variants={textSlideAnim}
                  initial="initial"
                  animate={inView ? "animate2" : ""}
                >
                  Navegue pelo produto:
                </motion.p>
              </div>

              {footerLinks.product.map((item, i) => (
                <div
                  key={i}
                  className="relative mb-4 h-fit overflow-hidden group"
                >
                  <motion.p
                    key={i}
                    className="text-s font-neue-regular text-[20px] leading-[1] tracking-[-0.01em] cursor-pointer"
                    variants={textSlideAnim}
                    initial="initial"
                    animate={inView ? "animate" : ""}
                    custom={i}
                  >
                    <a href={item.href}>{item.label}</a>
                  </motion.p>
                  <div className="absolute bottom-0 bg-s w-0 h-[1px] transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex-[2] flex flex-col items-end">
            <div className="max-w-[1000px] flex flex-col items-start ">
              {footerLinks.socials.map((social, i) => (
                <div
                  key={i}
                  className="relative mb-4 h-fit overflow-hidden group"
                >
                  <motion.p
                    key={i}
                    className=" text-s font-neue-regular text-[64px] leading-[1.08] tracking-[-0.03em] cursor-pointer max-lg:text-[42px]"
                    variants={textSlideAnim}
                    initial="initial"
                    animate={inView ? "animate" : ""}
                    custom={i}
                  >
                    <a href={social.href} target="_blank">
                      {social.label}
                    </a>
                  </motion.p>
                  <div className="absolute bottom-0 bg-s w-0 h-[3px] transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="size-full flex items-end justify-end ">
          <div className="w-full flex items-center justify-between max-lg:flex-col max-lg:items-start">
            <h2 className="text-s font-neue-regular text-[64px] leading-[1] tracking-[-0.03em] max-lg:text-[42px] max-lg:mb-2">
              © {new Date().getFullYear()} Dallas®
            </h2>
            <p className="text-s/75 font-neue-regular text-[16px]">
              Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
