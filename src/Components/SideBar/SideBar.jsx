import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";
import BuyProButton from "../Utils/Buttons/BuyProButton/BuyProButton";
import BurgerMenu from "../Utils/HeaderUtils/BurgerMenu/BurgerMenu";
import Logo from "../Utils/HeaderUtils/Logo/Logo";
import styles from "./sidebar.module.css";

function SideBar() {
  const context = useContext(MyContext);
  const width = context.isOpen ? "max-md:w-[20.625rem] md:w-[22.5rem]" : "w-0";

  return (
    <div className={`${width} h-full lg:hidden transition-all duration-500 ${styles.grid}`}>
      <header className="min-h-[5rem] w-full flex justify-between items-center px-4">
        <BurgerMenu close />
        <Logo dark />
      </header>
      <main className={styles.main}>
        <BuyProButton className="flex justify-center items-start w-[90%] text-center sm:hidden mt-8" />
      </main>
    </div>
  );
}

export default SideBar;
