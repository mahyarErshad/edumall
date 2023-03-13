import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "./styles.module.css";
import moneyManagementImage from "../../../assets/images/monetized-courses/money-management.jpg";
import monitizedMethords from "../../../assets/images/monetized-courses/monitized-methords.jpg";
import paymentPaypal from "../../../assets/images/monetized-courses/payment-paypal.jpg";
import lifetimeAccess from "../../../assets/images/monetized-courses/lifetime-access.jpg";
import { ReactComponent as MoneyManagementIcon } from "../../../assets/images/monetized-courses/money-management.svg";
import { ReactComponent as QuestionMark } from "../../../assets/images/CourseManagementSystem/svg/questionMark.svg";
import { ReactComponent as MultipleInstructors } from "../../../assets/images/CourseManagementSystem/svg/multipleInstructors.svg";

function MonetizedCoursesTabs() {
  return (
    <Tabs className="w-full flex-center max-md:flex-col gap-4 mt-10">
      <div className="max-md:w-full md:w-[34%]">
        <TabList className="flex flex-col justify-start h-full gap-3 flex-center lg:pr-[10%]">
          <Tab className={`gap-4 w-full py-6 px-8 rounded-lg cursor-pointer ${styles.tab} tab`}>
            <MoneyManagementIcon className=" transition-all duration-300" />
            <h3 className="text-black text-xl font-medium">سازنده دوره مقدماتی</h3>
            <p className={`${styles.description} text-sm font-normal text-[#696969]`}>کاربران می‌توانند محتوای دوره و آزمون‌ها را ایجاد کنند یا مدرس را به راحتی اضافه کنند.</p>
          </Tab>
          <Tab className={`gap-4 w-full py-6 px-8 rounded-lg cursor-pointer ${styles.tab} tab`}>
            <QuestionMark className="w-8 h-8 transition-all duration-300" />
            <h3 className="text-black text-xl font-medium">تنظیمات آزمون پیشرفته</h3>
            <p className={`${styles.description} text-sm font-normal text-[#696969]`}>تنظیمات مسابقه به شما امکان می‌دهد انواع سؤالات را انتخاب کنید، محدودیت‌های زمانی تعیین کنید و بسیاری موارد دیگر.</p>
          </Tab>
          <Tab className={`gap-4 w-full py-6 px-8 rounded-lg cursor-pointer ${styles.tab} tab`}>
            <MultipleInstructors className="w-8 h-8 transition-all duration-300" />
            <h3 className="text-black text-xl font-medium">چندین مربی</h3>
            <p className={`${styles.description} text-sm font-normal text-[#696969]`}>یک دوره می تواند بیش از یک مدرس داشته باشد. شما می توانید هر تعداد مربی که می خواهید داشته باشید.</p>
          </Tab>
        </TabList>
      </div>
      <div className="max-md:w-full md:w-[65%] flex-center relative">
        <TabPanel className="md:absolute max-md:relative">
          <img className="border-[0.375rem] border-[#333] test shadow-lg rounded-[1.25rem] h-full z-10" src={moneyManagementImage} alt="course-addons" />
        </TabPanel>
        <TabPanel className="md:absolute max-md:relative">
          <img className="border-[0.375rem] border-[#333] test shadow-lg rounded-[1.25rem] h-full z-10" src={monitizedMethords} alt="course-feature-quiz" />
          <img src={paymentPaypal} className="absolute bottom-[50%] translate-y-[50%] -right-[5%] border border-[#6CBD7E] rounded-md" alt="course-feature-quiz" />
        </TabPanel>
        <TabPanel className="md:absolute max-md:relative">
          <img className="border-[0.375rem] border-[#333] test shadow-lg rounded-[1.25rem] h-full z-10" src={lifetimeAccess} alt="course-addons" />
        </TabPanel>
      </div>
    </Tabs>
  );
}

export default MonetizedCoursesTabs;
