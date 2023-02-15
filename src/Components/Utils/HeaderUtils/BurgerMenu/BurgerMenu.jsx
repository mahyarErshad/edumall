import React, { useContext } from "react";
import MyContext from "../../../../Context/MyContext";

function BurgerMenu() {
  const Context = useContext(MyContext);
  return (
    <div className="-mr-2 flex lg:hidden mt-[0.375rem]">
      <button onClick={() => Context.setIsOpen((prev) => !prev)} type="button" className="bg-transparent flex-center p-2 rounded-md hover:text-primary transition-all duration-300" aria-controls="mobile-menu" aria-expanded="false">
        <div className="w-[1.25rem] h-[1.5625rem] relative">
          <span className={`h-[2px] w-full transition-all duration-500 bg-white block absolute ${!Context.isOpen && "top-[3px]"} ${Context.isOpen && "rotate-[45deg] top-[10px]"}`}></span>
          <span className={`h-[2px] w-full transition-all duration-500 bg-white block absolute top-[37%] ${Context.isOpen && "opacity-0"}`}></span>
          <span className={`h-[2px] w-full transition-all duration-500 bg-white block absolute ${!Context.isOpen && "top-[15px]"} ${Context.isOpen && "rotate-[-45deg] top-[10px]"}`}></span>
        </div>
      </button>
    </div>
  );
}

export default BurgerMenu;
