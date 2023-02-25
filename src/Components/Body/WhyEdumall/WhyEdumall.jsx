import React from "react";
import WhyEdumallCards from "./WhyEdumallCards/WhyEdumallCards";
import image1 from "../../../assets/images/why-edumall-cards/1.jpg";
import image2 from "../../../assets/images/why-edumall-cards/2.png";
import image3 from "../../../assets/images/why-edumall-cards/3.png";

function WhyEdumall() {
  return (
    <section className="w-full max-lg:pt-8 lg:pt-[15%] flex-center bg-white max-lg:gap-4 lg:gap-8 flex-wrap px-4">
      <WhyEdumallCards image={image1} title="آموزش دهنده قدرتمند LMS داخلی" description="یک راه حل هوشمند، ساده و کامل LMS برای ساخت دوره ها و مدیریت مرکز آموزشی شما" />
      <WhyEdumallCards image={image2} title="سازنده دوره های مقدماتی گسترده" description="دوره‌های مدبرانه و آزمون ایجاد کنید. همه چیز را با کشیدن و رها کردن کنترل کنید" />
      <WhyEdumallCards image={image3} title="طرح های نوین و کاربردی" description="یک راه حل هوشمند، ساده و کامل LMS برای ساخت دوره ها و مدیریت مرکز آموزشی شما" />
    </section>
  );
}

export default WhyEdumall;
