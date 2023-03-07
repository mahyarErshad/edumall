import React from "react";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

function TutorMouseHoverAnimation() {
  return (
    <div className="max-lg:hidden lg:w-2/4">
      <MouseParallaxContainer resetOnLeave={true} useWindowMouseEvents={true} globalFactorX={0.1} globalFactorY={0.1} className="absolute bg-transparent overflow-hidden w-full min-h-[38rem]">
        <MouseParallaxChild className="absolute bottom-[-25rem] right-[-25rem] bg-[#0666BD] circle w-[50rem] h-[50rem]" />
        <MouseParallaxChild className="absolute bottom-[-12.5rem] right-[-12.5rem] bg-[#055CAA] circle w-[25rem] h-[25rem]" inverted={true} />
        <MouseParallaxChild className="absolute bottom-[-33rem] left-[-28rem] bg-transparent border border-white circle w-[50rem] h-[50rem] opacity-40" />
        <MouseParallaxChild className="absolute bottom-[-15rem] left-[-12.5rem] bg-transparent border border-white circle w-[25rem] h-[25rem] opacity-40" inverted={true} />
        <MouseParallaxChild className="absolute top-[28%] right-[44%] bg-gradient-to-b from-[#FDE190] to-[#FEC93D] h-[0.9375rem] w-[0.9375rem] circle" />
        <MouseParallaxChild className="absolute top-[33%] right-[38%] bg-gradient-to-b from-[#ABE54B] to-[#5EA82C] h-[2.5rem] w-[2.5rem] circle" inverted={true} />
        <MouseParallaxChild className="bg-gradient-to-b from-[#FDE190] to-[#FEC93D] h-[0.9375rem] w-[0.9375rem] absolute bottom-[12.5rem] left-[7.75rem] circle" inverted={true} />
        <MouseParallaxChild className="bg-gradient-to-b from-[#F9CC57] to-[#F87924] h-[2.5rem] w-[2.5rem] absolute bottom-[17rem] left-[5rem] circle" />
      </MouseParallaxContainer>
    </div>
  );
}

export default TutorMouseHoverAnimation;
