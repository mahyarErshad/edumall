import React from "react";

interface IProps {
  title: string;
  image: string;
}

function ELearningManagementCards(props: IProps) {
  return (
    <figure className="py-10 px-8 bg-white rounded-lg shadow-md flex-center gap-4 z-10">
      <img src={props.image} alt={props.title} />
      <h3 className="font-medium text-xl">{props.title}</h3>
    </figure>
  );
}

export default ELearningManagementCards;
