import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "./styles.module.css";
import moneyManagementImage from "../../../assets/images/monetized-courses/money-management.jpg";
import monitizedMethords from "../../../assets/images/monetized-courses/monitized-methords.jpg";
import paymentPaypal from "../../../assets/images/monetized-courses/payment-paypal.jpg";
import lifetimeAccess from "../../../assets/images/monetized-courses/lifetime-access.jpg";
import { ReactComponent as MoneyManagementIcon } from "../../../assets/images/monetized-courses/money-management.svg";
import { ReactComponent as MultiplePayment } from "../../../assets/images/monetized-courses/multiplePayment.svg";
import { ReactComponent as LifetimeAccess } from "../../../assets/images/monetized-courses/lifetime-access.svg";

function MonetizedCoursesTabs() {
  return (
    <Tabs className="w-full flex-center max-md:flex-col gap-4 mt-10">
      <div className="max-md:w-full md:w-[34%]">
        <TabList className="flex flex-col justify-start h-full gap-3 flex-center lg:pr-[10%]">
          <Tab className={`gap-4 w-full py-6 px-8 rounded-lg cursor-pointer ${styles.tab} tab`}>
            <MoneyManagementIcon className=" transition-all duration-300" />
            <h3 className="text-black text-xl font-medium">مدیریت مالی</h3>
            <p className={`${styles.description} text-sm font-normal text-[#696969]`}>با ادغام WooCommerce و EDD، می توانید به راحتی پول خود را در داشبورد خود مدیریت کنید.</p>
          </Tab>
          <Tab className={`gap-4 w-full py-6 px-8 rounded-lg cursor-pointer ${styles.tab} tab`}>
            <MultiplePayment className="transition-all duration-300" />
            <h3 className="text-black text-xl font-medium">روش های پرداخت چندگانه</h3>
            <p className={`${styles.description} text-sm font-normal text-[#696969]`}>اجومال محبوب ترین روش های پرداخت را در اختیار کاربران قرار می دهد تا به همه کاربران کمک کند تا تراکنش های یکپارچه داشته باشند.</p>
          </Tab>
          <Tab className={`gap-4 w-full py-6 px-8 rounded-lg cursor-pointer ${styles.tab} tab`}>
            <LifetimeAccess className="transition-all duration-300" />
            <h3 className="text-black text-xl font-medium">دسترسی مادام العمر</h3>
            <p className={`${styles.description} text-sm font-normal text-[#696969]`}>به لطف دسترسی مادام العمر ارائه شده از تیوتر LMS، دانشجویان همیشه می توانند به دوره قبل از ثبت نام، دسترسی داشته باشند.</p>
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
