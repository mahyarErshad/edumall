import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "./CourseManagementSystemTabs.module.css";
import { ReactComponent as FrontendSvg } from "../../../assets/images/CourseManagementSystem/svg/frontend.svg";
import { ReactComponent as QuestionMark } from "../../../assets/images/CourseManagementSystem/svg/questionMark.svg";

function CourseManagementSystemTabs() {
  return (
    <Tabs className="w-full flex-center flex-wrap gap-4 mt-10">
      <div className="w-[34%]">
        <TabList className="flex flex-col justify-start h-full gap-3 flex-center lg:pr-[10%]">
          <Tab className={`gap-4 w-full py-6 px-8 rounded-lg cursor-pointer ${styles.tab} tab`}>
            <FrontendSvg className="w-8 h-8 transition-all duration-300" />
            <h3 className="text-black text-xl font-medium">سازنده دوره مقدماتی</h3>
            <p className={`${styles.description} text-sm font-normal text-[#696969]`}>کاربران می‌توانند محتوای دوره و آزمون‌ها را ایجاد کنند یا مدرس را به راحتی اضافه کنند.</p>
          </Tab>
          <Tab className={`gap-4 w-full py-6 px-8 rounded-lg cursor-pointer ${styles.tab} tab`}>
            <QuestionMark className="w-8 h-8 transition-all duration-300" />
            <h3 className="text-black text-xl font-medium">تنظیمات آزمون پیشرفته</h3>
            <p className={`${styles.description} text-sm font-normal text-[#696969]`}>تنظیمات مسابقه به شما امکان می‌دهد انواع سؤالات را انتخاب کنید، محدودیت‌های زمانی تعیین کنید و بسیاری موارد دیگر.</p>
          </Tab>
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
