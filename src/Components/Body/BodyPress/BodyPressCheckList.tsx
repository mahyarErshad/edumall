import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface IProps {
  text: string;
}

function BodyPressCheckList(props: IProps) {
  return (
    <div className="flex-center gap-4 w-full">
      <span className="circle w-[1.875rem] h-[1.875rem] bg-[#6CBD7E] flex-center">
        <FontAwesomeIcon icon={faCheck} />
      </span>
      <p>{props.text}</p>
    </div>
  );
}

export default BodyPressCheckList;
