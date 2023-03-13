import React from "react";

interface IProps {
  counter: string | number;
  text: string;
  hasDots: boolean;
}

function ContentDripCard(props: IProps) {
  return (
    <figure className="flex-center flex-col gap-3 max-md:w-full md:max-w-[15.625rem]">
      <div className="flex-center w-full">
        <span className="font-medium w-12 h-12 flex-center rounded-[20px] bg-[#f1f3fa] text-primary">{props.counter}</span>
        <span className={`flex-grow h-1 ${props.hasDots && "background-infinite-dots"} max-md:bg-repeat-y md:bg-repeat-x w-full`}></span>
      </div>
      <p className="font-medium">{props.text}</p>
    </figure>
  );
}

export default ContentDripCard;
