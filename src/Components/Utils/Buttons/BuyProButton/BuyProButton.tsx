import React from "react";
import styles from "./styles.module.css";

function BuyProButton() {
  return (
    <div className="h-full flex-center lg:mt-[0.375rem] max-lg:order-2">
      <a className={`${styles.proButton} max-sm:hidden text-sm font-bold`} href="#app">
        خرید نسخه حرفه ای
      </a>
    </div>
  );
}

export default BuyProButton;
