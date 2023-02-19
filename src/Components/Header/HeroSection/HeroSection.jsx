import React from "react";
import Header from "../Header/Header";
import image from "../../../assets/images/hero-image.png";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section className="relative w-full bg-primary min-h-screen">
      <Header />
      <div className="relative max-lg:flex flex-col max-lg:pt-8">
        <div className="font-medium md:text-5xl max-md:text-3xl text-white lg:absolute lg:right-[50px] lg:top-[100px] z-20 lg:max-w-[50%] max-lg:mb-8 max-lg:text-center flex flex-col max-lg:items-center gap-6">
          <h1>قالب وردپرسی آموزشی همه کاره برای</h1>
          <TypeAnimation sequence={["دوره های آنلاین", 2000, "مراکز آموزشی", 2000, "مدارس", 2000]} speed={75} deletionSpeed={99} wrapper="h2" className="text-secondary font-bold" repeat={Infinity} />
          <a href="#demos" className="bg-white px-10 py-4 mt-4 text-primary rounded-md font-bold border-[2px] border-white hover:bg-transparent hover:text-white inline-block transition-all duration-300 text-lg w-fit">
            مشاهده دموها
          </a>
        </div>
        <img src={image} alt="Edumall" className="lg:absolute lg:left-[-7rem] lg:top-[3.125rem] mirror z-10" />
      </div>
    </section>
  );
}

export default HeroSection;
