import React from "react";
import styles from "../ContentDrip/style.module.css"


function WooCommerceIntegrationCard(props) {
  return (
    <figure className="md:flex-center max-md:flex md:flex-col gap-3 w-full max-md:mt-4">
      <div className="flex-center md:w-full max-md:flex-col">
        <span className="font-medium w-12 h-12 flex-center rounded-[20px] bg-[#f1f3fa] text-primary">{props.counter}</span>
        <span className={`flex-grow h-1 ${props.hasDots && styles['background-infinite-dots']} max-md:mt-4 max-md:bg-repeat-y md:bg-repeat-x max-md:h-8 max-md:w-2 md:w-full`}></span>
      </div>
      <p className="font-medium pl-7 max-md:self-start max-md:translate-y-2 min-h-[4.5rem] mt-2">{props.text}</p>
    </figure>
  );
}

export default WooCommerceIntegrationCard;
