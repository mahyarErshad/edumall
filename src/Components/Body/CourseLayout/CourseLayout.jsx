import React from "react";
import styles from "./style.module.css";

function CourseLayout() {
  return (
    <section className="px-4 py-10 w-full flex flex-col bg-navy">
      <div className="max-lg:w-full lg:w-[40%] flex-center max-md:flex-col-reverse">
        <div className="flex justify-start max-w-[34.125rem]">
          <span className={`${styles.counter} line_after`}>+۰۷</span>
        </div>
        <div className="flex justify-start max-md:w-full md:w-2/4"></div>
      </div>
    </section>
  );
}

export default CourseLayout;
