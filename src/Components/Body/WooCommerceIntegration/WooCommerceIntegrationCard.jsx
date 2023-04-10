import React from "react";
import styles from "../ContentDrip/style.module.css"


function WooCommerceIntegrationCard(props) {
  return (
    <figure className="flex gap-3 w-full max-md:mt-4">
      <div className="flex-center flex-col">
        <span className="font-medium w-12 h-12 flex-center rounded-[20px] bg-[#f1f3fa] text-primary">{props.counter}</span>
        <span className={`flex-grow h-1 ${props.hasDots && styles['background-infinite-dots-y']} md:py-6 max-md:mt-4 bg-repeat-y max-md:h-8 max-md:w-2 md:w-full`}></span>
      </div>
      <p className="font-medium pl-7 max-md:self-start max-md:translate-y-2 min-h-[4.5rem] mt-2">{props.text}</p>
    </figure>
  );
}

export default WooCommerceIntegrationCard;
