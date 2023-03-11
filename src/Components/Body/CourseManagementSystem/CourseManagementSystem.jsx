import React from "react";
import CourseManagementSystemTabs from "./CourseManagementSystemTabs";

function CourseManagementSystem() {
  return (
    <section className="w-full px-4 bg-[#F5F7FD] py-24 flex justify-start items-center flex-col gap-8 overflow-hidden">
      <h3 className="max-md:text-3xl md:text-5xl font-medium">
        سیستم <span className="line_after">مدیریت</span> دوره
      </h3>
      <p className="text-center text-[#7E7E7E]">اجومال با پلاگین تیوتر LMS یکپارچه شده است و دارای یک سیستم کامل برای مدیریت دوره های آموزشی است.</p>
      <CourseManagementSystemTabs />
    </section>
  );
}

export default CourseManagementSystem;
