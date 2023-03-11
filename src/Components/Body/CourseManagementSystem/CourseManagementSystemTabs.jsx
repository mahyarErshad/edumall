import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "./CourseManagementSystemTabs.module.css";

function CourseManagementSystemTabs() {
  return (
    <Tabs className="w-full flex-center flex-wrap gap-[5%] mt-10">
      <div className="w-[60%] flex-center">
        <TabPanel>
          <img className="border-[0.375rem] border-[#333] test shadow-lg rounded-[1.25rem] h-full z-10" src="https://edumall.thememove.com/wp-content/uploads/2020/11/course-addons-01.jpg" alt="" />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </div>
      <div className="w-[35%]">
        <TabList className="flex flex-col gap-3">
          <Tab className={`flex justify-start gap-8 w-full py-6 px-8 rounded-lg ${styles.tab}`}></Tab>
          <Tab>Title 2</Tab>
        </TabList>
      </div>
    </Tabs>
  );
}

export default CourseManagementSystemTabs;
