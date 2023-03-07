import React from "react";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import main from "../../../assets/images/tutor-hover-animations/main.jpg";
import tutorLogo from "../../../assets/images/tutor-hover-animations/tutor-logo.jpg";

function TutorMouseHoverAnimation() {
  return (
    <div className="max-lg:hidden lg:w-2/4">
      <MouseParallaxContainer containerStyle={{overflow:"visible"}} resetOnLeave={true} useWindowMouseEvents={true} globalFactorX={0.1} globalFactorY={0.1} className="absolute flex-center bg-transparent w-full min-h-[38rem]">
        <MouseParallaxChild factorX={0} factorY={0}>
          <img src={main} alt="main image of tutor section" />
        </MouseParallaxChild>
        <MouseParallaxChild className="absolute top-[5%] right-[5%]">
          <img src={tutorLogo} alt="tutor logo" className="rounded-[27px] shadow-lg" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  );
}

export default TutorMouseHoverAnimation;
