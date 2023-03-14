import React from "react";
import styles from "./styles.module.css";

function BodyPress() {
  return (
    <section className="w-full px-4 bg-gradient-to-b from-[#1600C3] to-[#AE6DD7] py-10 flex-center max-md:flex-col">
      <div className="max-md:w-full md:w-[40%] flex-center">
        <div className="flex flex-col justify-start max-w-[27.1875rem]">
          <span className="py-1 px-4 bg-gradient-to-bl from-[#F646A9] to-[#5C51FF] text-white font-medium text-lg w-fit rounded-md mb-7">جامعه</span>
          <h3 className={`${styles["line-height"]} font-medium max-md:text-xl md:text-5xl text-white`}>
            بهترین جامعه آموزشی را با <mark className={styles["text-shadow"]}>بادی پرس</mark> بسازید
          </h3>
        </div>
      </div>
      <div className="max-md:w-full md:w-[60%]"></div>
    </section>
  );
}

export default BodyPress;
