import React from "react";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import main from "../../../assets/images/tutor-hover-animations/main.jpg";

function TutorMouseHoverAnimation() {
  return (
    <div className="max-lg:hidden lg:w-2/4">
      <MouseParallaxContainer resetOnLeave={true} useWindowMouseEvents={true} globalFactorX={0.1} globalFactorY={0.1} className="absolute flex-center bg-transparent overflow-hidden w-full min-h-[38rem]">
        <MouseParallaxChild factorX={0} factorY={0} className="">
          <img src={main} alt="main image of tutor section" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  );
}

export default TutorMouseHoverAnimation;
