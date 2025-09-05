import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Menu from "./menu";
import Reserve from "./reserve";
import { useReserveStore } from "@/store/zustand";

const Nav = ({ lenis }) => {
  const [menu, setMenu] = useState(false);
  const { reserve, reserveClose, reserveOpen } = useReserveStore();

  const handleMenuClick = () => {
    if (reserve) {
      reserveClose();
      setMenu(true);
    }
    if (menu || reserve) {
      reserveClose();

      setMenu(false);
    } else {
      setMenu((prev) => !prev);
    }
  };

  return (
    <>
      <nav className="fixed top-0 right-0 p-10 flex items-center justify-end gap-8 z-110 max-lg:p-5">
        <div
          className={`absolute top-10 right-10 w-[60px] h-[60px] rounded-full flex items-center justify-center  cursor-pointer z-20 
 max-lg:top-5 max-lg:right-5
            ${menu || reserve ? " bg-p" : "bg-s border border-brd"} group`}
          onClick={handleMenuClick}
        >
          <div className="relative w-[25px] h-[10px] flex flex-col justify-between items-center">
            <div
              className={`w-[25px] h-[2px] transition-all duration-300 ${
                menu || reserve
                  ? "rotate-45 translate-y-[4px] bg-s"
                  : "group-hover:translate-y-2 bg-p"
              } `}
            />
            <div
              className={`w-[25px] h-[2px] transition-all duration-300 ${
                menu || reserve
                  ? "-rotate-45 -translate-y-[4px] bg-s"
                  : "group-hover:-translate-y-2 bg-p"
              } `}
            />
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {menu && (
          <Menu
            menu={menu}
            setMenu={setMenu}
            reserveOpen={reserveOpen}
            lenis={lenis}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {reserve && <Reserve reserve={reserve} reserveClose={reserveClose} />}{" "}
      </AnimatePresence>
    </>
  );
};

export default Nav;
