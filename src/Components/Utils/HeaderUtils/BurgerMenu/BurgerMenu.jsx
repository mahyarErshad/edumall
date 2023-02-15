import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import MyContext from "../../../../Context/MyContext";

function BurgerMenu() {
  const Context = useContext(MyContext);
  return (
    <div className="-mr-2 flex lg:hidden mt-[0.375rem]">
      {!Context.isOpen && (
        <button onClick={() => Context.setIsOpen((prev) => !prev)} type="button" className="icon-button bg-transparent flex-center p-2 rounded-md hover:text-primary transition-all duration-300" aria-controls="mobile-menu" aria-expanded="false">
          <FontAwesomeIcon className="w-[2rem] h-[1.5rem]" icon={faBars} />
        </button>
      )}
    </div>
  );
}

export default BurgerMenu;
