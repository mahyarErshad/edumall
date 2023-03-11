import { faBacon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "./CourseManagementSystemTabs.module.css";

function CourseManagementSystemTabs() {
  return (
    <Tabs className="w-full flex-center flex-wrap gap-[5%] mt-10">
      <div className="w-[30%]">
        <TabList className="flex flex-col justify-start h-full gap-3 flex-center lg:pr-[10%]">
          <Tab className={`gap-4 w-full py-6 px-8 rounded-lg cursor-pointer ${styles.tab} tab`}>
            <FontAwesomeIcon className="w-8 h-8 transition-all duration-300" icon={faBacon} />
            <h3 className="text-black text-xl font-medium">سازنده دوره مقدماتی</h3>
            <p className={`${styles.description} text-sm font-normal text-[#696969]`}>کاربران می‌توانند محتوای دوره و آزمون‌ها را ایجاد کنند یا مدرس را به راحتی اضافه کنند.</p>
          </Tab>
          <Tab>Title 2</Tab>
        </TabList>
      </div>
      <div className="w-[65%] flex-center">
        <TabPanel>
          <img className="border-[0.375rem] border-[#333] test shadow-lg rounded-[1.25rem] h-full z-10" src="https://edumall.thememove.com/wp-content/uploads/2020/11/course-addons-01.jpg" alt="" />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </div>
    </Tabs>
  );
}

export default CourseManagementSystemTabs;
