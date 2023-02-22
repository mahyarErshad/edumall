import React from "react";
import Header from "../Header/Header";
import image from "../../../assets/images/hero-image.png";
import { TypeAnimation } from "react-type-animation";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import WhiteHeader from "../WhiteHeader/WhiteHeader";

function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary to-[#055CAA] min-h-screen">
      <Header />
      <WhiteHeader />
      <div className="relative max-lg:flex flex-col max-lg:pt-8">
        <div className="font-medium md:text-5xl max-md:text-3xl text-white lg:absolute lg:right-[50px] lg:top-[100px] z-20 lg:max-w-[50%] max-lg:mb-8 max-lg:text-center flex flex-col max-lg:items-center gap-6">
          <h1 className="leading-[1.3]">قالب وردپرسی آموزشی همه کاره برای</h1>
          <TypeAnimation sequence={["دوره های آنلاین", 2000, "مراکز آموزشی", 2000, "مدارس", 2000]} speed={75} deletionSpeed={99} wrapper="h2" className="text-secondary font-bold" repeat={Infinity} />
          <a href="#demos" className="bg-white px-10 py-4 mt-4 text-primary rounded-md font-bold border-[2px] border-white hover:bg-transparent hover:text-white inline-block transition-all duration-300 text-lg w-fit">
            مشاهده دموها
          </a>
        </div>
        <img src={image} alt="Edumall" className="lg:absolute lg:w-[90%] md:-left-12 lg:left-0 lg:top-6 mirror z-10" />
      </div>
      <MouseParallaxContainer resetOnLeave={true} useWindowMouseEvents={true} globalFactorX={0.1} globalFactorY={0.1} className="absolute w-full h-screen bg-gradient-to-br from-primary to-[#055CAA] overflow-hidden max-lg:hidden">
        <MouseParallaxChild className="absolute bottom-[-25rem] right-[-25rem] bg-[#0666BD] rounded-[50%] w-[50rem] h-[50rem]" />
        <MouseParallaxChild className="absolute bottom-[-12.5rem] right-[-12.5rem] bg-[#055CAA] rounded-[50%] w-[25rem] h-[25rem]" inverted={true} />
        <MouseParallaxChild className="absolute bottom-[-33rem] left-[-28rem] bg-transparent border border-white rounded-[50%] w-[50rem] h-[50rem] opacity-40" />
        <MouseParallaxChild className="absolute bottom-[-15rem] left-[-12.5rem] bg-transparent border border-white rounded-[50%] w-[25rem] h-[25rem] opacity-40" inverted={true} />
        <MouseParallaxChild className="absolute top-[28%] right-[44%] bg-gradient-to-b from-[#FDE190] to-[#FEC93D] h-[0.9375rem] w-[0.9375rem] rounded-[50%]" />
        <MouseParallaxChild className="absolute top-[33%] right-[38%] bg-gradient-to-b from-[#ABE54B] to-[#5EA82C] h-[2.5rem] w-[2.5rem] rounded-[50%]" inverted={true} />
        <MouseParallaxChild className="bg-gradient-to-b from-[#FDE190] to-[#FEC93D] h-[0.9375rem] w-[0.9375rem] absolute bottom-[12.5rem] left-[7.75rem] rounded-[50%]" inverted={true} />
        <MouseParallaxChild className="bg-gradient-to-b from-[#F9CC57] to-[#F87924] h-[2.5rem] w-[2.5rem] absolute bottom-[17rem] left-[5rem] rounded-[50%]" />
      </MouseParallaxContainer>
    </section>
  );
}

export default HeroSection;
