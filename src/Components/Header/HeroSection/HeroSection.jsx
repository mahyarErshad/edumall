import React from "react";
import Header from "../Header/Header";
import image from "../../../assets/images/hero-image.png";

function HeroSection() {
  return (
    <section className="relative w-full bg-primary min-h-screen">
      <Header />
      <div className="relative max-lg:flex flex-col gap-4 max-lg:pt-8">
        <h1 className="font-medium md:text-5xl max-md:text-3xl text-white lg:absolute lg:right-[50px] lg:top-[100px] z-10 lg:max-w-[50%] max-lg:mb-8 max-lg:text-center">قالب وردپرسی آموزشی همه کاره برای</h1>
        <img src={image} alt="Edumall" className="lg:absolute lg:left-[-7rem] lg:top-[3.125rem] mirror" />
      </div>
    </section>
  );
}

export default HeroSection;
