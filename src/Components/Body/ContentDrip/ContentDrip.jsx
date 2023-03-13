import React from "react";
import ContentDripCard from "./ContentDripCard";

function ContentDrip() {
  return (
    <section className="w-full px-4 flex-center gap-8 max-md:flex-col pt-32 pb-20">
      <div className="max-md:w-full md:w-[60%] flex-center flex-col">
        <h4 className="font-medium max-md:text-3xl md:text-5xl mb-16">جریان محتوا</h4>
        <div className="w-full flex-center">
          <ContentDripCard counter="۱" text="بخش ها و ترتیب درس های خود را تنظیم و سفارشی کنید." hasDots />
        </div>
      </div>
      <div className="max-md:w-full md:w-[35%]"></div>
    </section>
  );
}

export default ContentDrip;
