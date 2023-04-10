import React from "react";

function PremiumPluginCard(props) {
  return (
    <div className="flex-center gap-5 flex-col">
      <img className="rounded-[3.125rem]" src={props.image} alt={props.text} />
      <h4 className="text-base text-white font-medium">{props.text}</h4>
    </div>
  );
}

export default PremiumPluginCard;
