import React from "react";
import HeroSection from "../../Header/HeroSection/HeroSection";
import DemoPages from "../DemoPages/DemoPages";
import WhyEdumall from "../WhyEdumall/WhyEdumall";
import ToturSection from "../TutorSection/TutorSection";
import ZoomVideo from "../ZoomVideo/ZoomVideo";
import CourseManagementSystem from "../CourseManagementSystem/CourseManagementSystem";
import AdministrationsOption from "../AdministrationsOption/AdministrationsOption";
import ELearningManagement from "../ELearningManagement/ELearningManagement";
import ContentDrip from "../ContentDrip/ContentDrip";
import MonetizedCourses from "../MonetizedCourses/MonetizedCourses";
import BodyPress from "../BodyPress/BodyPress";
import CourseLayout from "../CourseLayout/CourseLayout";
import WooCommerceIntegration from "../WooCommerceIntegration/WooCommerceIntegration";
import PremiumPlugins from "../PremiumPlugins/PremiumPlugins";
import Footer from "../../Footer/Footer";

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
      <ELearningManagement />
      <ContentDrip />
      <MonetizedCourses />
      <BodyPress />
      <CourseLayout />
      <WooCommerceIntegration />
      <PremiumPlugins />
      <Footer />
    </>
  );
}

export default MainBody;
