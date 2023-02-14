import React, { memo, useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logo from "../../../assets/images/logo.png";
import NavLinks from "../../Utils/NavLinks/NavLinks";
import BuyProButton from "../../Utils/Buttons/BuyProButton/BuyProButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="min-h-[4.375rem] w-full py-2 bg-transparent z-50">
      <div className="max-w-[93.75rem] mx-auto sm:px-6 lg:px-8 px-4">
        <div className="flex items-center lg:flex-row-reverse justify-between h-16">
          <div className="-mr-2 flex lg:hidden mt-[0.375rem]">
            <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <BuyProButton />
          <div className="flex items-center">
            <div className="hidden lg:block">
              <ul className="ml-10 flex items-baseline gap-10">
                <NavLinks />
              </ul>
            </div>
          </div>
          <div onClick={() => window.scrollTo({ top: 0 })} className="flex-center h-full cursor-pointer">
            <img className="max-w-[9.375rem] lg:ml-4" src={logo} alt="Logo" />
          </div>
        </div>
      </div>
      <div>{/* <NavLinks /> */}</div>
    </header>
  );
}

export default memo(Header);
