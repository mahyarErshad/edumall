import React from "react";
import BodyPressCheckList from "./BodyPressCheckList";
import styles from "./styles.module.css";
import image from "../../../assets/images/body-press-image.png";
import bodyPressLogo from "../../../assets/images/buddypress-logo.jpg";

function BodyPress() {
  return (
    <section className="w-full px-4 bg-gradient-to-b from-[#1600C3] to-[#AE6DD7] py-10 flex-center max-lg:flex-col min-h-screen">
      <div className="max-lg:w-full lg:w-[40%] flex-center">
        <div className="flex flex-col justify-start max-w-[31.25rem]">
          <span className="py-1 px-4 bg-gradient-to-bl from-[#F646A9] to-[#5C51FF] text-white font-medium text-lg w-fit rounded-md mb-7">جامعه</span>
          <h3 className={`${styles["line-height"]} font-medium max-md:text-xl md:text-5xl text-white`}>
            بهترین جامعه آموزشی را با <mark className={styles["text-shadow"]}>بادی پرس</mark> بسازید
          </h3>
          <p className="mt-6 max-md:text-center text-white">با ادغام بادی پرس، همه کاربران شامل دانشجویان و مدرسان می توانند:</p>
          <section className="flex flex-col mt-8 gap-6">
            <BodyPressCheckList text="تعامل در گروه های دوره" />
            <BodyPressCheckList text="اخبار و به‌ روزرسانی‌ها را در فیدهایی درست مثل شبکه‌های اجتماعی بخوانید" />
            <BodyPressCheckList text="نمایه خود را ایجاد کنید و گفتگوهای خصوصی داشته باشید." />
          </section>
        </div>
      </div>
      <div className="max-lg:w-full lg:w-[60%] relative flex-center">
        <div className={`${styles.hover} absolute circle w-[12.8125rem] h-[12.8125rem] bg-[#FFFFFF1A] flex-center top-0 right-0 max-lg:hidden`}>
          <img src={bodyPressLogo} alt="Bodypress Logo" className="circle opacity-80 w-[6.125rem] h-[6.125rem] transition-all duration-300" />
        </div>
        <img src={image} alt="Body Press" />
      </div>
    </section>
  );
}

export default BodyPress;
