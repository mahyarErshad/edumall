import React from "react";
import styles from "./style.module.css";

function CourseLayout() {
  return (
    <section className="w-full px-4 bg-navy py-10 flex-center max-lg:flex-col">
      <div className="max-lg:w-full lg:w-[40%] flex-center">
        <div className="flex flex-col justify-start max-w-[31.25rem] w-full max-md:gap-4 md:gap-6">
          <span className={`${styles.counter} line_after w-fit`}>+۰۷</span>
          <h3 className="max-md:text-2xl md:text-5xl text-white font-medium">طرح بندی دوره</h3>
          <p>کاربران می‌توانند از میان ۷+ طرح‌بندی دوره‌های مختلف برای پلتفرم آموزش الکترونیکی شما انتخاب کنند</p>
        </div>
      </div>
      <div className="max-lg:w-full lg:w-[60%] relative flex-center"></div>
    </section>
  );
}
export default CourseLayout;
