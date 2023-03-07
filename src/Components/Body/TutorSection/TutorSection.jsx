import React from "react";
import arrow from "../../../assets/images/tutorSectionSvg/tutor-arrow.svg";

function TutorSection() {
  return (
    <section className="pt-32 bg-white flex flex-col max-lg:px-4 px-[15%]">
      <div className="max-md:w-full md:w-2/4 bg-transparent flex flex-col gap-8 max-md:text-center">
        <h2 className="font-medium max-md:text-3xl md:text-5xl leading-5">
          ادغام با افزونه <span className="line_after">تیوتر</span> LMS
        </h2>
        <p>اجومال با قدرتمندترین پلاگین LMS - تیوتر LMS ارائه می شود که برای مربیان فردی، سازمان های آموزشی و پلت فرم آموزش الکترونیکی تخصص دارد.</p>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-9">
        <div className="max-md:w-full md:w-2/4">
          <figure className="bg-transparent flex flex-col gap-4 justify-start md:w-2/4 max-md:w-full">
            <img className="w-12" src={arrow} alt="arrow" />
            <h3 className="text-2xl font-medium">سازنده دوره بصری</h3>
            <p className="font-normal text-sm">کاربران به راحتی می توانند دوره ها را با کشیدن و رها کردن سیستم و رابط کاربر پسند ایجاد و مدیریت کنند.</p>
          </figure>
        </div>
        <div className="max-md:w-full md:w-2/4"></div>
      </div>
    </section>
  );
}

export default TutorSection;
