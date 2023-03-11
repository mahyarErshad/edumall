import React from "react";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import main from "../../../assets/images/tutor-hover-animations/main.jpg";
import tutorLogo from "../../../assets/images/tutor-hover-animations/tutor-logo.jpg";
import dots from "../../../assets/images/tutor-hover-animations/dots.jpg";
import menu from "../../../assets/images/tutor-hover-animations/menu.jpg";
import activeCourses from "../../../assets/images/tutor-hover-animations/active-courses.png";
import totalEarnings from "../../../assets/images/tutor-hover-animations/total-earnings.jpg";

function TutorMouseHoverAnimation() {
  return (
    <div className="max-lg:hidden lg:w-2/4">
      <MouseParallaxContainer containerStyle={{ overflow: "visible" }} resetOnLeave={true} useWindowMouseEvents={true} globalFactorX={0.02} globalFactorY={0.02} className="absolute flex-center bg-transparent w-full min-h-[38rem]">
        <MouseParallaxChild factorX={0} factorY={0}>
          <img src={main} alt="tutor demo" className="absolute z-10 top-[50%] right-[50%] translate-x-[40%] -translate-y-[50%]" />
        </MouseParallaxChild>
        <MouseParallaxChild className="absolute top-[5%] right-[5%] z-20">
          <img src={tutorLogo} alt="tutor logo" className="rounded-[27px] shadow-lg" />
        </MouseParallaxChild>
        <MouseParallaxChild className="absolute top-[5%] left-0">
          <img src={dots} alt="dots" />
        </MouseParallaxChild>
        <MouseParallaxChild inverted={true} className="absolute top-[50%] right-[5%] z-20">
          <img src={menu} alt="menu" />
        </MouseParallaxChild>
        <MouseParallaxChild className="absolute bottom-[10%] left-0 z-20">
          <img src={activeCourses} alt="active courses" />
        </MouseParallaxChild>
        <MouseParallaxChild inverted={true} className="absolute bottom-0 left-[10%] z-20">
          <img src={totalEarnings} alt="total earnings" />
        </MouseParallaxChild>
        <MouseParallaxChild inverted={true} className="absolute h-20 w-20 border border-[#CFD5FF] circle bg-transparent right-[20%] top-[30%]" />
        <MouseParallaxChild className="absolute h-56 w-56 border border-[#CFD5FF] circle bg-transparent right-[5%] top-[35%]" />
      </MouseParallaxContainer>
    </div>
  );
}

export default TutorMouseHoverAnimation;
