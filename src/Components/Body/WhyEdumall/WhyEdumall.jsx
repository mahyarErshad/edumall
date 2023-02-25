import React from "react";
import WhyEdumallCards from "./WhyEdumallCards/WhyEdumallCards";
import image1 from "../../../assets/images/why-edumall-cards/1.jpg"
import image2 from "../../../assets/images/why-edumall-cards/2.png"
import image3 from "../../../assets/images/why-edumall-cards/3.png"

function WhyEdumall() {
  return <section className="w-full max-lg:pt-8 lg:pt-[15%] flex-center bg-white max-lg:gap-4 lg:gap-8 flex-wrap px-4">
  <WhyEdumallCards />
  <WhyEdumallCards />
  <WhyEdumallCards />
  </section>;
}

export default WhyEdumall;
