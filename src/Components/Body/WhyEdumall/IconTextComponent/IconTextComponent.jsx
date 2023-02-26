import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function IconTextComponent(props) {
  return (
    <div className="flex-center gap-4 max-md:w-[30%] md:w-full min-w-[24.375rem] py-2 px-4 bg-transparent">
      <FontAwesomeIcon color="#066cc9" icon={props.icon} />
      <p className="text-[#9B9B9B] text-base font-medium">{props.text}</p>
    </div>
  );
}

export default IconTextComponent;
