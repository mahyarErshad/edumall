import React from "react";
import styles from "./styles.module.css";
import image from "../../../../assets/images/why-edumall-cards/1.png"

function WhyEdumallCards() {
  return (
    <figure className={`${styles.wrapper} p-8 bg-[#F8F7F3] rounded-[10px] hover:bg-[#FFFEFA] transition-all duration-300`}>
      <img src={image} alt="" className={`${styles.image}`} />
      <h3 className={`${styles.title}`}>test tedtda  saef</h3>
      <p className={`${styles.description}`}>test tedtda  saefsragsad sadsghdshbdsh bgdshbsxfzhge tdsgbrdhbdfg hsndthgbhrhdf sgfes dhbsgd ngrsth bgshd sdhg srgd dfrh</p>
    </figure>
  );
}

export default WhyEdumallCards;