import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import MyContext from "../../../../Context/MyContext";

function BurgerMenu({ close }) {
  const Context = useContext(MyContext);
  return (
    <div className="-mr-2 flex lg:hidden mt-[0.375rem]">
      <button onClick={() => Context.setIsOpen((prev) => !prev)} type="button" className="bg-transparent flex-center p-2 rounded-md text-black transition-all duration-300" aria-controls="mobile-menu" aria-expanded="false">
        {close ? <FontAwesomeIcon size="2xl" className="svg-black" icon={faTimes} /> : <FontAwesomeIcon color="#fff" size="xl" icon={faBars} />}
      </button>
    </div>
  );
}

export default BurgerMenu;
