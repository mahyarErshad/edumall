import React from "react";
import styles from "./tabs.module.css";

function CourseManagementSystemTabs() {
  return (
    <section className="w-full flex-center flex-wrap">
      <div className={`w-[55%] ${styles.imageTab}`}>
        <img src="https://edumall.thememove.com/wp-content/uploads/2020/11/course-addons-01.jpg" alt="" />
      </div>
      <div className="w-[45%]"></div>
    </section>
  );
}

export default CourseManagementSystemTabs;
