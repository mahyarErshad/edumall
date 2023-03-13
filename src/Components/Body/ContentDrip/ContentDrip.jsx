import React from "react";
import ContentDripCard from "./ContentDripCard";
import borderImage from "../../../assets/images/contentDrip/circle-dots-border.png";
import frontImage from "../../../assets/images/contentDrip/lesson-preview.jpg";

function ContentDrip() {
  return (
    <section className="w-full px-4 flex-center gap-8 max-md:flex-col py-8">
      <div className="max-md:w-full md:w-[60%] flex-center flex-col">
        <h4 className="font-medium max-md:text-3xl md:text-5xl mb-16">جریان محتوا</h4>
        <div className="w-full flex-center">
          <ContentDripCard counter="۰۱" text="بخش ها و ترتیب درس های خود را تنظیم و سفارشی کنید." hasDots />
          <ContentDripCard counter="۰۲" text="بخش ها و ترتیب درس های خود را تنظیم و سفارشی کنید." hasDots />
          <ContentDripCard counter="۰۳" text="بخش ها و ترتیب درس های خود را تنظیم و سفارشی کنید." />
        </div>
      </div>
      <div className="max-md:w-full md:w-[35%] relative h-[31.25rem] flex-center">
        <img src={borderImage} alt="a circle made by dots for border" className="w-full h-full absolute z-0" />
        <img src={frontImage} alt="Content drip" className="z-20 border border-[#eee] rounded-[10px] shadow-md h-[80%]" />
      </div>
    </section>
  );
}

export default ContentDrip;
