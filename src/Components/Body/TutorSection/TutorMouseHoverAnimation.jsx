import React from "react";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import main from "../../../assets/images/tutor-hover-animations/main.jpg";
import tutorLogo from "../../../assets/images/tutor-hover-animations/tutor-logo.jpg";
import dots from "../../../assets/images/tutor-hover-animations/dots.jpg";

function TutorMouseHoverAnimation() {
  return (
    <div className="max-lg:hidden lg:w-2/4">
      <MouseParallaxContainer containerStyle={{ overflow: "visible" }} resetOnLeave={true} useWindowMouseEvents={true} globalFactorX={0.1} globalFactorY={0.1} className="absolute flex-center bg-transparent w-full min-h-[38rem]">
        <MouseParallaxChild factorX={0} factorY={0}>
          <img src={main} alt="tutor demo" className="absolute z-10 top-[50%] right-[50%] translate-x-[40%] -translate-y-[50%]" />
        </MouseParallaxChild>
        <MouseParallaxChild className="absolute top-[5%] right-[5%] z-20">
          <img src={tutorLogo} alt="tutor logo" className="rounded-[27px] shadow-lg" />
        </MouseParallaxChild>
        <MouseParallaxChild className="absolute top-[5%] left-0">
          <img src={dots} alt="dots" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  );
}

export default TutorMouseHoverAnimation;
