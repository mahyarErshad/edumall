import React from "react";

function TutorSection() {
  return (
    <section className="pt-32 bg-white px-4 flex-center flex-col">
      <div className="max-md:w-full md:w-2/4 bg-transparent flex flex-col gap-8 max-md:text-center">
        <h2 className="font-medium max-md:text-3xl md:text-5xl leading-5">
          ادغام با افزونه <span className="line_after">تیوتر</span> LMS
        </h2>
        <p>اجومال با قدرتمندترین پلاگین LMS - تیوتر LMS ارائه می شود که برای مربیان فردی، سازمان های آموزشی و پلت فرم آموزش الکترونیکی تخصص دارد.</p>
      </div>
      <div className="flex justify-between items-center flex-wrap">
        <div className="max-md:w-full md:w-2/4"></div>
        <div className="max-md:w-full md:w-2/4"></div>
      </div>
    </section>
  );
}

export default TutorSection;
