import React from "react";
import styles from "./styles.module.css";

interface props {
  image: string;
  title: string;
  description: string;
}

function WhyEdumallCards(props: props) {
  return (
    <figure className={`${styles.wrapper} bg-[#F8F7F3] px-6 py-12 rounded-[10px] hover:bg-[#FFFEFA] transition-all duration-300 max-lg:w-full lg:w-[30%] lg:min-h-[12.5rem] lg:max-h-[16.875rem]`}>
      <img src={props.image} alt={props.title} className={`${styles.image}`} />
      <h3 className={`${styles.title}`}>{props.title}</h3>
      <p className={`${styles.description}`}>{props.description}</p>
    </figure>
  );
}

export default WhyEdumallCards;
