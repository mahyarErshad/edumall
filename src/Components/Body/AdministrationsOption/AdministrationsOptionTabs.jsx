import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "./AdministrationsOptionTabs.module.css";
import courseAddons from "../../../assets/images/CourseManagementSystem/images/course-addons.jpg";
import courseFeatureQuiz from "../../../assets/images/CourseManagementSystem/images/course-feature-quiz.jpg";
import courseFeatureQuiz2 from "../../../assets/images/CourseManagementSystem/images/course-feature-quiz-2.png";
import multiInstructorsImage from "../../../assets/images/CourseManagementSystem/images/course-feature-multi-instructors.jpg";
import courseFeaturePrerequisites from "../../../assets/images/CourseManagementSystem/images/course-feature-prerequisites.jpg";
import wavyShape from "../../../assets/images/wavy-shape.png";
import backgroundImage from "../../../assets/images/tabs-background-shape.svg";
import { ReactComponent as ReportsSvg } from "../../../assets/images/AdministrationsOptionTabs/svg/reports.svg";
import { ReactComponent as ReviewsSvg } from "../../../assets/images/AdministrationsOptionTabs/svg/reviews.svg";
import { ReactComponent as EmailSvg } from "../../../assets/images/AdministrationsOptionTabs/svg/email.svg";
import { ReactComponent as QASvg } from "../../../assets/images/AdministrationsOptionTabs/svg/qa.svg";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

function AdministrationsOptionTabs() {
  return (
    <Tabs className="w-full flex-center max-md:flex-col gap-4 mt-10">
      <div className="max-md:w-full md:w-[65%] flex-center relative">
        <div className="absolute max-lg:hidden h-full w-full -left-[10%]">
          <img src={backgroundImage} alt="background shape" />
        </div>
        <MouseParallaxContainer containerStyle={{ overflow: "visible" }} resetOnLeave={true} useWindowMouseEvents={true} globalFactorX={0.1} globalFactorY={0.1} className="absolute h-full min-h-[27.1875rem] w-full max-lg:hidden">
          <MouseParallaxChild>
            <img className="absolute top-[-20%] left-[10%]" src={wavyShape} alt="wavy shape" />
          </MouseParallaxChild>
          <MouseParallaxChild className="absolute bottom-0 right-[18%] z-20 bg-gradient-to-b from-[#FDE190] to-[#FEC93D] w-[1.125rem] h-[1.125rem] circle" />
          <MouseParallaxChild className="absolute bottom-12 right-[13%] z-20 bg-gradient-to-b from-[#4E97FD] to-[#77CCFD] w-[1.625rem] h-[1.625rem] circle" inverted={true} />
          <MouseParallaxChild className="absolute bg-gradient-to-b z-20 left-[25%] bottom-0 from-[#ABE54B] to-[#5EA82C] w-[1.125rem] h-[1.125rem] circle" inverted={true} />
        </MouseParallaxContainer>
        <TabPanel className="md:absolute max-md:relative">
          <img className="border-[0.375rem] border-[#333] test shadow-lg rounded-[1.25rem] h-full z-10" src={courseAddons} alt="course-addons" />
        </TabPanel>
        <TabPanel className="md:absolute max-md:relative">
          <img className="border-[0.375rem] border-[#333] test shadow-lg rounded-[1.25rem] h-full z-10" src={courseFeatureQuiz} alt="course-feature-quiz" />
          <img src={courseFeatureQuiz2} className="absolute -bottom-[20%] -right-[30%]" alt="course-feature-quiz" />
        </TabPanel>
        <TabPanel className="md:absolute max-md:relative">
          <img className="border-[0.375rem] border-[#333] test shadow-lg rounded-[1.25rem] h-full z-10" src={multiInstructorsImage} alt="course-addons" />
        </TabPanel>
        <TabPanel className="md:absolute max-md:relative">
          <img className="border-[0.375rem] border-[#333] test shadow-lg rounded-[1.25rem] h-full z-10" src={courseFeaturePrerequisites} alt="course-addons" />
        </TabPanel>
      </div>
      <div className="max-md:w-full md:w-[34%]">
        <TabList className="flex flex-col justify-start h-full gap-3 flex-center lg:pr-[10%]">
          <Tab className={`gap-4 w-full py-6 px-8 rounded-lg cursor-pointer ${styles.tab} tab`}>
            <ReportsSvg className="w-8 h-8 transition-all duration-300" />
            <h3 className="text-black text-xl font-medium">گزارشات و تجزیه و تحلیل پیشرفته</h3>
            <p className={`${styles.description} text-sm font-normal text-[#696969]`}>مدیر می تواند آمار را پیگیری کند، تمام مدرسان و دانش آموزان را از داشبورد مدیریت کند</p>
          </Tab>
          <Tab className={`gap-4 w-full py-6 px-8 rounded-lg cursor-pointer ${styles.tab} tab`}>
            <ReviewsSvg className="w-8 h-8 transition-all duration-300" />
            <h3 className="text-black text-xl font-medium">مدیریت نظرات</h3>
            <p className={`${styles.description} text-sm font-normal text-[#696969]`}>کلیه بررسی دوره های دانشجویان توسط مدیر نظارت (تأیید، حذف) خواهد شد</p>
          </Tab>
          <Tab className={`gap-4 w-full py-6 px-8 rounded-lg cursor-pointer ${styles.tab} tab`}>
            <EmailSvg className="w-8 h-8 transition-all duration-300" />
            <h3 className="text-black text-xl font-medium">اعلان ایمیلی</h3>
            <p className={`${styles.description} text-sm font-normal text-[#696969]`}>گزینه هایی برای اطلاع رسانی پیشرفت یا اطلاع رسانی به دانش آموزان و معلمان از طریق ایمیل وجود دارد</p>
          </Tab>
          <Tab className={`gap-4 w-full py-6 px-8 rounded-lg cursor-pointer ${styles.tab} tab`}>
            <QASvg className="w-8 h-8 transition-all duration-300" />
            <h3 className="text-black text-xl font-medium">عملیات پرسش و پاسخ</h3>
            <p className={`${styles.description} text-sm font-normal text-[#696969]`}>بستری که دانش آموزان می توانند نظر بدهند، در مورد دوره ها یا مشکلات مربوطه سوال بپرسند</p>
          </Tab>
        </TabList>
      </div>
    </Tabs>
  );
}

export default AdministrationsOptionTabs;
