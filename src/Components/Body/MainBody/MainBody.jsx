import React from "react";
import HeroSection from "../../Header/HeroSection/HeroSection";
import DemoPages from "../DemoPages/DemoPages";
import WhyEdumall from "../WhyEdumall/WhyEdumall";
import ToturSection from "../TutorSection/TutorSection"
import ZoomVideo from "../ZoomVideo/ZoomVideo";
import CourseManagementSystem from "../CourseManagementSystem/CourseManagementSystem";
import AdministrationsOption from "../AdministrationsOption/AdministrationsOption";

function MainBody() {
  return (
    <>
      <HeroSection />
      <WhyEdumall />
      <DemoPages />
      <ToturSection />
      <ZoomVideo />
      <CourseManagementSystem />
      <AdministrationsOption />
    </>
  );
}

export default MainBody;
