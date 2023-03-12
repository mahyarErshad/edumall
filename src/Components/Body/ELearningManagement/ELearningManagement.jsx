import React from "react";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import wavyImage from "../../../assets/images/wavy-shape.png";
import ELearningManagementCards from "./ELearningManagementCards";
import controlIcon from "../../../assets/images/ELearningManagement/control.svg";
import settingsIcon from "../../../assets/images/ELearningManagement/settings.svg";

function ELearningManagement() {
  return (
    <section className="w-full px-4 bg-[#F8F8F8] pt-32 pb-20 flex justify-between max-lg:flex-col items-center overflow-hidden gap-8">
      <MouseParallaxContainer resetOnLeave={true} useWindowMouseEvents={true} globalFactorX={0.1} globalFactorY={0.1} containerStyle={{ overflow: "visible" }} className="max-lg:w-full lg:w-[45%] flex-center flex-col gap-10 md:pr-[10%] relative">
        <h3 className="font-medium max-md:text-2xl md:text-3xl lg:text-4xl">
          برای مدیریت آموزش الکترونیکی <span className="line_after">بهینه</span> شده
        </h3>
        <p className="text-[#696969]">تیوتر LMS کاربران را قادر می سازد تا پلتفرم آموزش الکترونیکی شما را به راحتی مدیریت کنند و بر تمام دوره های شما نظارت داشته باشند</p>
        <MouseParallaxChild className="absolute -bottom-[100%] right-[10%] max-lg:hidden">
          <img src={wavyImage} alt="wavy circle shape" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <div className="max-lg:w-full lg:flex-grow flex-center flex-col gap-5">
        <div className="flex-center gap-5 lg:pl-[5.625rem] flex-wrap">
          <ELearningManagementCards image={controlIcon} title="ثبت نام دانشجویان را کنترل کنید" />
          <ELearningManagementCards image={settingsIcon} title="تنظیمات دوره را سفارشی کنید" />
        </div>
        <div className="flex-center gap-5 lg:pr-[5.625rem] flex-wrap">
          <ELearningManagementCards image={controlIcon} title="ثبت نام دانشجویان را کنترل کنید" />
          <ELearningManagementCards image={controlIcon} title="ثبت نام دانشجویان را کنترل کنید" />
        </div>
      </div>
    </section>
  );
}

export default ELearningManagement;
