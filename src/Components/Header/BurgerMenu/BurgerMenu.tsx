import React from "react";

function BurgerMenu({ isOpen, setIsOpen }) {
  return (
    <button onClick={() => setIsOpen((prev) => !prev)} type="button" className="bg-transparent flex-center p-2 rounded-md hover:text-primary transition-all duration-300" aria-controls="mobile-menu" aria-expanded="false">
      <div className="w-[1.25rem] h-[1.5625rem] relative">
        <span className={`h-[2px] w-full transition-all duration-500 bg-white block absolute ${!isOpen && "top-[3px]"} ${isOpen && "rotate-[45deg] top-[10px]"}`}></span>
        <span className={`h-[2px] w-full transition-all duration-500 bg-white block absolute top-[37%] ${isOpen && "opacity-0"}`}></span>
        <span className={`h-[2px] w-full transition-all duration-500 bg-white block absolute ${!isOpen && "top-[15px]"} ${isOpen && "rotate-[-45deg] top-[10px]"}`}></span>
      </div>
    </button>
  );
}

export default BurgerMenu;
