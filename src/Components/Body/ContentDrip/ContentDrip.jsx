import React from "react";

function ContentDrip() {
  return (
    <section className="w-full px-4 flex-center gap-8 max-md:flex-col pt-32 pb-20">
      <div className="max-md:w-full md:w-[60%] flex-center flex-col">
        <h4 className="font-medium max-md:text-3xl md:text-5xl mb-16">جریان محتوا</h4>
        <div className="w-full flex-center">
          <figure className="flex-center flex-col gap-4 max-w-[15.625rem]">
            <div className="flex-center w-full">
              <span className="font-medium w-12 h-12 flex-center rounded-[20px] bg-[#f1f3fa] text-primary">1</span>
              <span className="flex-grow h-1 background-infinite-dots max-md:bg-repeat-y md:bg-repeat-x w-full"></span>
            </div>
            <p className="font-medium">بخش ها و ترتیب درس های خود را تنظیم و سفارشی کنید.</p>
          </figure>
        </div>
      </div>
      <div className="max-md:w-full md:w-[35%]"></div>
    </section>
  );
}

export default ContentDrip;
