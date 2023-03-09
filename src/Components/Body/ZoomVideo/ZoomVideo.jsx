import React from "react";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import image from "../../../assets/images/zoom-meeting-image.png";
import logo from "../../../assets/images/zoom-meeting-logo.png";

function ZoomVideo() {
  return (
    <section className="px-4 w-full pt-40 pb-24 bg-white flex flex-wrap max-md:gap-4">
      <div className="max-md:w-full md:w-2/4 relative flex-center">
        <div className="absolute top-0 left-0 flex-center -translate-y-[75%]">
          <MouseParallaxContainer containerStyle={{ overflow: "visible" }} className="relative" resetOnLeave={true} useWindowMouseEvents={true} globalFactorX={0.02} globalFactorY={0.02}>
            <MouseParallaxChild className="absolute h-28 w-28 border border-[#EFF1FF] circle bg-transparent top-[-3.625rem]" />
            <MouseParallaxChild inverted={true} className="absolute h-56 w-56 border border-[#EFF1FF] circle bg-transparent top-[-7.1875rem] left-[-10.9375rem]" />
          </MouseParallaxContainer>
          <img src={logo} alt="Logo" className="z-10" />
        </div>
        <img src={image} alt="Zoom meet video" className="z-10" />
      </div>
      <div className="max-md:w-full md:w-2/4 flex flex-col gap-8 md:pr-[15%]">
        <div className="flex flex-col justify-center md:items-start max-md:items-center">
          <h2 className="max-md:text-3xl md:text-5xl font-medium mb-4">ویدئو کنفرانس</h2>
          <h3 className="max-md:text-3xl md:text-5xl font-medium text-primary line_after">ZOOM</h3>
        </div>
        <p className="text-[#7E7E7E]">زوم در اجومال ادغام شده است تا به مدارس و سازمان ها کمک کند تا برنامه های آنلاین خود را ارتقا دهند. دانشجویان می توانند از طریق کامپیوتر و موبایل به جلسات ویدیویی آنلاین با کیفیت بالا دسترسی داشته باشند. به سادگی می توانید مستقیماً از LMS خود با زوم Meetings ارتباط برقرار کنید.</p>
      </div>
    </section>
  );
}

export default ZoomVideo;
