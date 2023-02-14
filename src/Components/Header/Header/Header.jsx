import React, { memo, useState } from "react";
import NavLink from "../NavLink/NavLink";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logo from "../../../assets/images/logo.png";
import styles from "./styles.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const NavLinks = () => {
    return (
      <>
        <NavLink text="صفحه اصلی" href="#home" />
        <NavLink text="پیش نمایش ها" href="#demos" />
        <NavLink text="صفحات سفارشی" href="#custom-pages" />
        <NavLink text="صفحه مقالات" href="#blog-pages" />
        <NavLink text="صفحات فروشگاهی" href="#store-pages" />
      </>
    );
  };
  return (
    <header className="min-h-[4.375rem] w-full py-2 bg-transparent z-50">
      <div className="max-w-[93.75rem] mx-auto sm:px-6 lg:px-8 px-4">
        <div className="flex items-center lg:flex-row-reverse justify-between h-16">
          <div className="-mr-2 flex lg:hidden mt-[0.375rem]">
            <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div className="h-full flex-center lg:mt-[0.375rem] max-lg:order-2">
            <a className={`${styles.proButton} max-sm:hidden text-sm font-bold`} href="#app">
              خرید نسخه حرفه ای
            </a>
          </div>
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
      <NavLinks />
    </header>
  );
}

export default memo(Header);
