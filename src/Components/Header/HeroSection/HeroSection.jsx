import React from "react";
import Header from "../Header/Header";
import image from "../../../assets/images/hero-image.png";

function HeroSection() {
  return (
    <section className="relative w-full bg-primary min-h-screen">
      <Header />
      <img src={image} alt="Edumall" className="absolute lg:left-[-4.375rem] lg:top-[3.125rem] mirror max-md:hidden" />
    </section>
  );
}

export default HeroSection;
