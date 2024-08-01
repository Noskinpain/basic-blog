import React from "react";
import useHeader from "../../../hooks/use-header";

function Menu() {

  const {isMenuOpen, handleMenuClick} = useHeader()

  return (
    <>
    <section className="flex justify-center items-center gap-2 md:hidden">
      <div
        className={`flex flex-col justify-between w-6 h-4 cursor-pointer ${
          isMenuOpen ? "open" : ""
        }`}
        onClick={handleMenuClick}
      >
        <div
          className={`h-0.5 bg-[#71889B] transition-transform duration-300 ${
            isMenuOpen ? "transform rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`h-0.5 bg-[#71889B] transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`h-0.5 bg-[#71889B] transition-transform duration-300 ${
            isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>
      <p className="text-[14px]">Menu</p>
    </section>

   
    </>
  );
}

export default Menu;
