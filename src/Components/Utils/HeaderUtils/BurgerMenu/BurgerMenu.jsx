import React, { useContext } from "react";
import MyContext from "../../../../Context/MyContext";

function BurgerMenu() {
  const Context = useContext(MyContext);
  return (
    <div className="-mr-2 flex lg:hidden mt-[0.375rem]">
      <button onClick={() => Context.setIsOpen((prev) => !prev)} type="button" className="bg-transparent flex-center p-2 rounded-md hover:text-primary transition-all duration-300" aria-controls="mobile-menu" aria-expanded="false">
        <Font
      </button>
    </div>
  );
}

export default BurgerMenu;
