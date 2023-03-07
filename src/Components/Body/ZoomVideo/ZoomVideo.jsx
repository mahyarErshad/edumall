import React from "react";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import image from "../../../assets/images/zoom-meeting-image.png";
import logo from "../../../assets/images/zoom-meeting-logo.png";

function ZoomVideo() {
  return (
    <section className="px-4 w-full pt-40 pb-24 bg-white flex flex-wrap">
      <div className="max-md:w-full md:w-2/4 relative flex-center">
        <div className="absolute top-0 left-0 flex-center -translate-y-[75%]">
          <MouseParallaxContainer containerStyle={{ overflow: "visible" }} className="relative" resetOnLeave={true} useWindowMouseEvents={true} globalFactorX={0.02} globalFactorY={0.02}>
            <MouseParallaxChild className="absolute h-28 w-28 border border-[#EFF1FF] circle bg-transparent top-[-3.625rem]" />
            <MouseParallaxChild inverted={true} className="absolute h-56 w-56 border border-[#EFF1FF] circle bg-transparent top-[-7.1875rem] left-[-10.9375rem]" />
          </MouseParallaxContainer>
          <img src={logo} alt="Logo" />
        </div>
        <img src={image} alt="Zoom meet video" className="z-10" />
      </div>
      <div className="max-md:w-full md:w-2/4"></div>
    </section>
  );
}

export default ZoomVideo;
