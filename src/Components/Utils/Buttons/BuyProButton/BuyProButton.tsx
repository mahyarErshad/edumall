import React from "react";
import styles from "./styles.module.css";

interface props {
  className: string;
}

function BuyProButton(props: props) {
  return (
    <div className={`h-full ${props.className} max-lg:order-2`}>
      <a className={`${styles.proButton} font-bold w-full`} href="https://www.zhaket.com/web/edumall-lms-education-wordpress-theme" target="_blank" rel="noreferrer">
        خرید نسخه حرفه ای
      </a>
    </div>
  );
}

export default BuyProButton;
