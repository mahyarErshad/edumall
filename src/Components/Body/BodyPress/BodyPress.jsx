import React from "react";

function BodyPress() {
  return (
    <section className="w-full px-4 bg-gradient-to-b from-[#1600C3] to-[#AE6DD7] py-10 flex-center max-md:flex-col">
      <div className="max-md:w-full md:w-[40%] flex-center">
        <div className="flex flex-col justify-start">
          <span className="py-1 px-4 bg-gradient-to-bl from-[#F646A9] to-[#5C51FF] text-white font-medium text-lg w-fit rounded-md mb-7">جامعه</span>
          <h3 className="font-medium max-md:text-xl md:text-5xl text-white leading-5">
            بهترین جامعه آموزشی را با <span>بادی پرس</span> بسازید
          </h3>
        </div>
      </div>
      <div className="max-md:w-full md:w-[60%]"></div>
    </section>
  );
}

export default BodyPress;
