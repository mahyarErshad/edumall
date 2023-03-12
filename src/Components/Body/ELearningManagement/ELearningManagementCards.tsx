import React from "react";

interface IProps {
  title: string;
  image: string;
  className? : string;
}

function ELearningManagementCards(props: IProps) {
  return (
    <figure className={`${props.className} py-10 px-8 bg-white rounded-lg max-md:w-full md:w-[45%] shadow-md flex-center gap-4 z-10 max-w-[21.25rem]`}>
      <img src={props.image} alt={props.title} />
      <h3 className="font-medium text-xl">{props.title}</h3>
    </figure>
  );
}

export default ELearningManagementCards;
