import React from "react";
import ContentDripCard from "./ContentDripCard";
import borderImage from "../../../assets/images/contentDrip/circle-dots-border.png";
import frontImage from "../../../assets/images/contentDrip/lesson-preview.jpg";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import doubleCheck from "../../../assets/images/contentDrip/shape-double-check.jpg";
import certificateImage from "../../../assets/images/contentDrip/certificate.jpg";
import shapeCube from "../../../assets/images/contentDrip/shape-cube.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function ContentDrip() {
  return (
    <section className="w-full py-8 px-4 flex-center flex-col max-lg:gap-5 lg:gap-10">
      <section className="w-full flex-center md:gap-8 max-md:flex-col">
        <div className="max-md:w-full md:w-[60%] flex-center flex-col">
          <h4 className="font-medium max-md:text-3xl md:text-5xl mb-16">جریان محتوا</h4>
          <div className="w-full flex-center max-md:flex-col">
            <ContentDripCard counter="۰۱" text="بخش ها و ترتیب درس های خود را تنظیم و سفارشی کنید." hasDots />
            <ContentDripCard counter="۰۲" text="دانش آموزان تا پایان درس قبلی نمی توانند به درس بعدی دسترسی داشته باشند." hasDots />
            <ContentDripCard counter="۰۳" text="مدیر، مربیان می توانند درس را تا زمان شروع قفل کنند." />
          </div>
        </div>
        <div className="max-md:w-full md:w-[35%] relative h-[31.25rem] flex-center max-md:mt-6">
          <img src={borderImage} alt="a circle made by dots for border" className="absolute z-0 lg:h-full" />
          <img src={frontImage} alt="Content drip" className="z-10 border absolute border-[#eee] rounded-[10px] shadow-md lg:h-[80%]" />
          <MouseParallaxContainer resetOnLeave={true} useWindowMouseEvents={true} globalFactorX={0.1} globalFactorY={0.1} containerStyle={{ overflow: "visible" }} className="absolute z-20 w-full h-full max-lg:hidden">
            <MouseParallaxChild className="absolute top-[20%] right-[10%] bg-gradient-to-b from-[#ABE54B] to-[#5EA82C] h-4 w-4 circle" inverted={true} />
            <MouseParallaxChild className="absolute top-[10%] left-[15%]">
              <img src={doubleCheck} alt="Double check" className="circle shadow-md" />
            </MouseParallaxChild>
            <MouseParallaxChild className="absolute top-[70%] right-[8%] p-6 bg-secondary rounded-[2rem] flex-center shadow-md">
              <FontAwesomeIcon color="#fff" className="w-[2.125rem] h-[2.125rem]" icon={faLock} />
            </MouseParallaxChild>
            <MouseParallaxChild className="absolute bottom-[10%] left-[13%]" inverted={true}>
              <img src={shapeCube} alt="Double check" className="circle h-[2.1875rem] w-[2.1875rem]" />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      </section>
      <section className="w-full flex-center max-lg:flex-col-reverse max-md:gap-6 md:gap-12">
        <img src={certificateImage} alt="Certificate" className="lg:max-w-2/4" />
        <div className="max-lg:w-full lg:w-[40%] flex-center flex-col max-lg:gap-2 lg:gap-8">
          <h3 className="font-medium max-md:text-3xl md:text-4xl">سازنده گواهینامه</h3>
          <p className="max-w-[35.625rem] text-[#696969] max-lg:text-center">اجومال تعدادی طرح آماده و حرفه ای گواهینامه را برای انتخاب به کاربران ارائه می دهد یا می توانید گواهینامه خود را مطابق با سبک سازمان خود ایجاد کنید.</p>
        </div>
      </section>
    </section>
  );
}

export default ContentDrip;
