import React from "react";
import AdministrationsOptionTabs from "./AdministrationsOptionTabs";

function AdministrationsOption() {
  return (
    <section className="w-full px-4 bg-white py-24 flex justify-start items-center flex-col gap-8 overflow-hidden">
      <h3 className="max-md:text-3xl md:text-5xl font-medium">
        گزینه های <span className="line_after">مدیریت</span>
      </h3>
      <p className="text-center text-[#7E7E7E]">اجومال به لطف ادغام افزونه تیوتر LMS کنترل کامل وب سایت آموزشی شما را در اختیار کاربران قرار می دهد.</p>
      <AdministrationsOptionTabs />
    </section>
  );
}

export default AdministrationsOption;
