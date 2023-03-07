import React from "react";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

function TutorMouseHoverAnimation() {
  return (
    <div className="max-lg:hidden lg:w-2/4">
      <MouseParallaxContainer resetOnLeave={true} useWindowMouseEvents={true} globalFactorX={0.1} globalFactorY={0.1} className="absolute bg-transparent overflow-hidden w-full min-h-[38rem]">
        <MouseParallaxChild className="absolute bottom-[-25rem] right-[-25rem] bg-[#0666BD] circle w-[50rem] h-[50rem]" >
            
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  );
}

export default TutorMouseHoverAnimation;
