import React from "react";
import styles from "./style.module.css";
import laptopImage from "../../../assets/images/course-laptop.png";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import wavyShape from "../../../assets/images/wavy-shape.png";
import shapeCubePurple from "../../../assets/images/shape-cube-purple.png";
import Slider from "../../Slider/Slider";

function CourseLayout() {
  return (
    <section id="courses" className="w-full bg-navy pt-24 pb-10 px-4 overflow-y-visible relative flex flex-col">
      <div className="w-full flex-center max-lg:flex-col-reverse mb-16">
        <div className="max-lg:w-full lg:w-[40%] flex-center">
          <div className="flex flex-col justify-start max-w-[31.25rem] w-full max-md:gap-4 md:gap-6">
            <span className={`${styles.counter} line_after w-fit`}>+۰۷</span>
            <h3 className="max-md:text-2xl md:text-5xl text-white font-medium">طرح بندی دوره</h3>
            <p className="text-base text-[#FFFFFFB3] leading-8">کاربران می‌توانند از میان ۷+ طرح‌بندی دوره‌های مختلف برای پلتفرم آموزش الکترونیکی شما انتخاب کنند</p>
          </div>
        </div>
        <div className="max-lg:w-full lg:w-[60%] relative flex-center lg:justify-start lg:pr-[10%] z-10">
          <img src={laptopImage} alt="An open laptop showing courses" />
        </div>
      </div>
      <MouseParallaxContainer containerStyle={{ position: "absolute", overflow: "visible" }} resetOnLeave={true} useWindowMouseEvents={true} globalFactorX={0.1} globalFactorY={0.1} className="max-lg:hidden h-full w-full">
        <MouseParallaxChild className="absolute top-[-8.125rem] left-[1.4375rem] bg-transparent border border-white circle w-[28.625rem] h-[28.625rem] opacity-40" />
        <MouseParallaxChild className="absolute top-0 left-[10rem] bg-transparent border border-white circle w-[12rem] h-[12rem] opacity-40" inverted={true} />
        <MouseParallaxChild className="absolute top-[-8.125rem] right-[1.4375rem] bg-transparent border border-white circle w-[28.625rem] h-[28.625rem] opacity-40" />
        <MouseParallaxChild className="absolute top-0 right-[10rem] bg-transparent border border-white circle w-[12rem] h-[12rem] opacity-40" inverted={true} />
        <MouseParallaxChild className="absolute left-[9.8125rem] top-[18.0625rem] bg-gradient-to-b from-[#529CFD] to-[#75C9FD] h-[3.375rem] w-[3.375rem] circle" />
        <MouseParallaxChild className="absolute left-[20rem] top-[25rem] bg-gradient-to-b from-[#AFE84F] to-[#55A229] h-[0.875rem] w-[0.875rem] circle" inverted={true} />
        <MouseParallaxChild className="bg-gradient-to-b from-[#FDE190] to-[#FEC93D] h-[0.9375rem] w-[0.9375rem] absolute right-[40%] circle" inverted={true} factorX={0.2} factorY={0.2} />
        <MouseParallaxChild className="absolute right-[50%] top-[25%]">
          <img src={wavyShape} alt="a wavy shape" />
        </MouseParallaxChild>
        <MouseParallaxChild className="absolute right-[40%] top-[20%]" inverted={true}>
          <img src={shapeCubePurple} alt="a purple cube" className="w-[3.875rem] h-[3.625rem]" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <Slider />
    </section>
  );
}
export default CourseLayout;
