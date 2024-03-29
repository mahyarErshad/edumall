import React from "react";
import DemoPagesCard from "./DemoPagesCard";
import cardImage1 from "../../../assets/images/demo-cards/1.jpg";
import cardImage2 from "../../../assets/images/demo-cards/2.jpg";
import cardImage3 from "../../../assets/images/demo-cards/3.jpg";
import cardImage4 from "../../../assets/images/demo-cards/4.jpg";
import cardImage5 from "../../../assets/images/demo-cards/5.jpg";
import cardImage6 from "../../../assets/images/demo-cards/6.jpg";
import cardImage7 from "../../../assets/images/demo-cards/7.jpg";
import cardImage8 from "../../../assets/images/demo-cards/8.jpg";
import cardImage9 from "../../../assets/images/demo-cards/9.jpg";

function DemoPages() {
  return (
    <div id="demos" className="py-28 bg-[#F5F7FD] w-full px-4 flex-center flex-col">
      <div className="flex-center gap-4">
        <span className="max-md:text-5xl line_after md:text-8xl font-bold text-primary">+۹</span>
        <div className="flex justify-start items-center flex-col gap-3">
          <h3 className="max-md:text-2xl md:text-5xl font-medium">دموی</h3>
          <h3 className="max-md:text-2xl md:text-5xl font-medium">خانگی</h3>
        </div>
      </div>
      <p className="my-8 text-base text-center">
        اجومال بیش از <strong>۹ دمو منحصر به فرد و تخصصی</strong> با تمرکز بر مراکز آموزشی و دوره های آنلاین در اختیار کاربران قرار می دهد.
      </p>
      <section className="flex-center flex-wrap max-lg:gap-4 lg:gap-8 w-full">
        <DemoPagesCard image={cardImage1} title="دموی اصلی" href="https://dana-team.com/products/edumall/" />
        <DemoPagesCard image={cardImage2} title="مرکز دوره های آنلاین" href="https://dana-team.com/products/edumall/course-hub/" />
        <DemoPagesCard image={cardImage3} title="آکادمی آنلاین" href="https://dana-team.com/products/edumall/online-academy/" />
        <DemoPagesCard image={cardImage4} title="مرکز آموزش" href="https://dana-team.com/products/edumall/education-center/" />
        <DemoPagesCard image={cardImage5} title="دانشگاه" href="https://dana-team.com/products/edumall/university/" />
        <DemoPagesCard image={cardImage6} title="زبان آکادمیک" href="https://dana-team.com/products/edumall/language-academic/" />
        <DemoPagesCard image={cardImage7} title="معلم خصوصی" href="https://dana-team.com/products/edumall/single-instructor/" />
        <DemoPagesCard image={cardImage8} title="توسعه دهنده" href="https://dana-team.com/products/edumall/dev/" />
        <DemoPagesCard image={cardImage9} title="هنر آنلاین" href="https://dana-team.com/products/edumall/online-art" />
      </section>
    </div>
  );
}

export default DemoPages;
