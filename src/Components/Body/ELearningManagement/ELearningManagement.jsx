import React from "react";

function ELearningManagement() {
  return (
    <section className="w-full px-4 bg-[#F8F8F8] pt-32 pb-20 flex justify-between items-center flex-wrap">
      <div className="max-md:w-full md:w-[45%] flex-center flex-col gap-10 md:pr-[10%]">
        <h3 className="font-medium max-md:text-2xl md:text-3xl lg:text-4xl">
          برای مدیریت آموزش الکترونیکی <span className="line_after">بهینه</span> شده
        </h3>
        <p className="text-[#696969]">تیوتر LMS کاربران را قادر می سازد تا پلتفرم آموزش الکترونیکی شما را به راحتی مدیریت کنند و بر تمام دوره های شما نظارت داشته باشند</p>
      </div>
      <div className="max-md:w-full md:flex-grow"></div>
    </section>
  );
}

export default ELearningManagement;
