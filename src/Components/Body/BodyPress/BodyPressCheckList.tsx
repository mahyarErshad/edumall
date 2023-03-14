import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface IProps {
  text: string;
}

function BodyPressCheckList(props: IProps) {
  return (
    <div className="flex items-center gap-2 w-full">
      <span className="circle w-[1.875rem] h-[1.875rem] bg-[#6CBD7E] flex-center">
        <FontAwesomeIcon size="lg" color="#fff" icon={faCheck} />
      </span>
      <p className="text-white text-right text-base font-medium">{props.text}</p>
    </div>
  );
}

export default BodyPressCheckList;
