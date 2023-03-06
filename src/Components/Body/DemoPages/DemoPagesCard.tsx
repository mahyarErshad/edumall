import React from "react";
import styles from "./cards.module.css";

interface IProps {
  image: string;
  title: string;
}

function DemoPagesCard(props: IProps) {
  return (
    <figure className={`${styles.wrapper} max-md:w-full md:w-[47%] lg:w-[30%] max-w-[28.125rem] hover:bg-primary transition-all duration-300 cursor-pointer relative`}>
      <div className={styles.imageSection}>
        <div className={`${styles.shapes} absolute w-full h-full top-0 transition-all`}>
          <div className="w-[13.75rem] h-[13.75rem] border border-white opacity-40 circle translate-x-[50%] -translate-y-[50%] absolute"></div>
          <div className="w-[12.75rem] h-[12.75rem] border border-white bottom-0 left-0 opacity-40 circle -translate-x-[50%] absolute"></div>
          <div className="w-[20.625rem] h-[20.625rem] border border-white bottom-0 left-0 opacity-40 circle -translate-x-[50%] translate-y-[25%] absolute"></div>
          <div className="w-[1.75rem] h-[1.75rem] top-[25%] left-0 circle -translate-x-[50%] absolute bg-gradient-to-b from-[#fad961] to-[#f76b1c]"></div>
          <div className="w-[2.3125rem] h-[2.3125rem] top-[55%] right-0 circle translate-x-[40%] absolute bg-gradient-to-b from-[#b4ec51] to-[#429321]"></div>
          <div className="w-[0.875rem] h-[0.875rem] top-[45%] right-[10%] circle translate-x-[40%] absolute bg-gradient-to-b from-[#fff4ce] to-[#ffc221]"></div>
        </div>
        <img className={styles.image} src={props.image} alt={props.title} />
      </div>
      <div className={`${styles.titleSection} flex-center`}>
        <h3 className="text-2xl font-bold">{props.title}</h3>
      </div>
    </figure>
  );
}

export default DemoPagesCard;
