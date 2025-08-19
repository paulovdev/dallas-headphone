import Link from "next/link";
import { motion } from "framer-motion";

const textSlideAnim = {
  initial: { y: "100%" },
  animate: {
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

const Nav = ({ pathname }) => {
  return (
    <nav className="fixed top-0 left-0 p-6 w-full flex items-center justify-end gap-8 z-50">
      {navLinks.map((link) => (
        <div key={`${link.href}-${pathname}`} className="h-fit overflow-hidden">
          <motion.div
            variants={textSlideAnim}
            initial="initial"
            animate="animate"
          >
            <Link
              href={link.href}
              className="text-s text-[.85rem] font-medium tracking-[.6px] flex items-center hover:opacity-75 transition-all duration-300  cursor-default"
              style={{
                opacity: pathname === link.href ? 1 : 0.5,
              }}
            >
              {pathname === link.href && (
                <span className="relative w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
              )}
              {link.label}
            </Link>
          </motion.div>
        </div>
      ))}
    </nav>
  );
};

export default Nav;
