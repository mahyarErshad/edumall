import React from "react";
import WhyEdumallCards from "./WhyEdumallCards/WhyEdumallCards";
import image1 from "../../../assets/images/why-edumall-cards/1.jpg";
import image2 from "../../../assets/images/why-edumall-cards/2.png";
import image3 from "../../../assets/images/why-edumall-cards/3.png";
import styles from "./styles.module.css";
import IconTextData from "../../../lib/WhyEdumalIconText/WhyEdumalIconText";
import IconTextComponent from "./IconTextComponent/IconTextComponent";

function WhyEdumall() {
  return (
    <section className="w-full max-lg:pt-8 lg:pt-[15%] flex-center bg-white px-4 flex-col">
      <div className="flex-center w-full max-lg:gap-4 lg:gap-8 flex-wrap max-lg:mb-24 lg:mb-28">
        <WhyEdumallCards image={image1} title="آموزش دهنده قدرتمند LMS داخلی" description="یک راه حل هوشمند، ساده و کامل LMS برای ساخت دوره ها و مدیریت مرکز آموزشی شما" />
        <WhyEdumallCards image={image2} title="سازنده دوره های مقدماتی گسترده" description="دوره‌های مدبرانه و آزمون ایجاد کنید. همه چیز را با کشیدن و رها کردن کنترل کنید" />
        <WhyEdumallCards image={image3} title="طرح های نوین و کاربردی" description="یک راه حل هوشمند، ساده و کامل LMS برای ساخت دوره ها و مدیریت مرکز آموزشی شما" />
      </div>
      <h3 className="max-md:text-xl md:text-5xl font-medium">
        چرا اجومال را <span className={`${styles.choose} relative after:max-md:-bottom-[1.25rem] after:md:-bottom-10`}>انتخاب</span> کنیم
      </h3>
      <p className="max-w-[40.625rem] text-[#111] text-center mt-12">اجومال امکانات کاملی را برای ایجاد یک پلتفرم آموزش الکترونیکی ارائه می دهد. کاربران با در نظر گرفتن کاربردها، می توانند وب سایت آموزشی خود را به راحتی با ویژگی های اصلی اجومال مدیریت کنند.</p>
      <div className="mt-12 bg-white flex-center flex-wrap gap-4 w-full lg:max-w-[88.125rem] rounded-lg pt-12 p-9 shadow-lg">
        {IconTextData.map((data, index) => {
          return <IconTextComponent icon={data.icon} text={data.text} key={index} />;
        })}
      </div>
    </section>
  );
}

export default WhyEdumall;
