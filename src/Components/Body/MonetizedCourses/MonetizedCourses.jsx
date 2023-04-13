import React from "react";
import MonetizedCoursesTabs from "./MonetizedCoursesTabs";

function MonetizedCourses() {
  return (
    <section id="earnings" className="w-full px-4 bg-[#F5F7FD] py-24 flex justify-start items-center flex-col gap-8 overflow-hidden">
      <h3 className="max-md:text-3xl md:text-5xl font-medium">
        <span className="line_after">درآمد</span> از دوره های آموزشی
      </h3>
      <p className="text-center text-[#7E7E7E] max-w-[35.625rem]">تیوتر LMS کاربران را قادر می سازد تا پلتفرم آموزش الکترونیکی شما را به راحتی مدیریت کنند و بر تمام دوره های شما نظارت داشته باشند</p>
      <MonetizedCoursesTabs />
    </section>
  );
}

export default MonetizedCourses;
