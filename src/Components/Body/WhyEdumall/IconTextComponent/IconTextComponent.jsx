import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function IconTextComponent(props) {
  return (
    <div className="flex items-center justify-start gap-4 lg:w-[31%] md:w-[48%] max-md:w-full py-2 px-4 bg-transparent">
      <FontAwesomeIcon color="#066cc9" icon={props.icon} />
      <p className="text-[#9B9B9B] text-base font-medium whitespace-nowrap">{props.text}</p>
    </div>
  );
}

export default IconTextComponent;
