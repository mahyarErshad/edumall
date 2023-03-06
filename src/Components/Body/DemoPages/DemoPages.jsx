import React from "react";
import DemoPagesCard from "./DemoPagesCard";

function DemoPages() {
  return (
    <div className="py-28 bg-[#F5F7FD] w-full px-4 flex-center flex-col">
      <div className="flex-center gap-4">
        <span className="max-md:text-5xl line_after md:text-8xl font-bold text-primary">+۱۱</span>
        <div className="flex justify-start items-center flex-col gap-3">
          <h3 className="max-md:text-2xl md:text-5xl font-medium">دموی</h3>
          <h3 className="max-md:text-2xl md:text-5xl font-medium">خانگی</h3>
        </div>
      </div>
      <p className="my-8 text-base text-center">
        اجومال بیش از <strong>۱۱ دمو منحصر به فرد و تخصصی</strong> با تمرکز بر مراکز آموزشی و دوره های آنلاین در اختیار کاربران قرار می دهد.
      </p>
      <section className="flex-center flex-wrap max-lg:gap-4 lg:gap-8 w-full">
      <DemoPagesCard />
      <DemoPagesCard />
      <DemoPagesCard />
      </section>
    </div>
  );
}

export default DemoPages;
