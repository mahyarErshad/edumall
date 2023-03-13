import React from "react";
import ContentDripCard from "./ContentDripCard";
import borderImage from "../../../assets/images/contentDrip/circle-dots-border.png";
import frontImage from "../../../assets/images/contentDrip/lesson-preview.jpg";

function ContentDrip() {
  return (
    <section className="w-full px-4 flex-center md:gap-8 max-md:flex-col py-8">
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
        <img src={frontImage} alt="Content drip" className="z-20 border border-[#eee] rounded-[10px] shadow-md lg:h-[80%]" />
      </div>
    </section>
  );
}

export default ContentDrip;
