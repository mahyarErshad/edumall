import React from "react";
import styles from "./TutorSectionCards.module.css"

interface IProps {
  image: string;
  title: string;
  description: string;
}

function TutorSectionCards(props: IProps) {
  return (
    <figure className="bg-transparent lg:w-[47%] max-lg:w-full">
      <img className="w-12" src={props.image} alt={props.title} />
      <h3 className="text-2xl font-medium"> {props.title} </h3>
      <p className="font-normal text-sm"> {props.description} </p>
    </figure>
  );
}

export default TutorSectionCards;
