import React from "react";
import styles from "./styles.module.css";
import image from "../../../../assets/images/why-edumall-cards/1.png";

interface props {
  image: string;
  title: string;
  description: string;
}

function WhyEdumallCards(props: props) {
  return (
    <figure className={`${styles.wrapper} p-8 bg-[#F8F7F3] rounded-[10px] hover:bg-[#FFFEFA] transition-all duration-300 min-h-[13.5625rem] max-lg:w-full lg:w-[30%]`}>
      <img src={props.image} alt={props.title} className={`${styles.image}`} />
      <h3 className={`${styles.title}`}>{props.title}</h3>
      <p className={`${styles.description}`}>{props.description}</p>
    </figure>
  );
}

export default WhyEdumallCards;
