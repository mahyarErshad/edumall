import React from "react";
import HeroSection from "../../Header/HeroSection/HeroSection";
import DemoPages from "../DemoPages/DemoPages";
import WhyEdumall from "../WhyEdumall/WhyEdumall";
import ToturSection from "../TutorSection/TutorSection"

function MainBody() {
  return (
    <>
      <HeroSection />
      <WhyEdumall />
      <DemoPages />
      <ToturSection />
    </>
  );
}

export default MainBody;
