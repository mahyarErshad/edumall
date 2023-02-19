import React from "react";
import styles from "./styles.module.css";

interface props {
  className: string;
}

function BuyProButton(props: props) {
  return (
    <div className={`h-full ${props.className} lg:mt-[0.375rem] max-lg:order-2`}>
      <a className={`${styles.proButton} max-sm:hidden font-bold`} href="#app">
        خرید نسخه حرفه ای
      </a>
    </div>
  );
}

export default BuyProButton;
