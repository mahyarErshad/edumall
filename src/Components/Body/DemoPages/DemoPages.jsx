import React from "react";

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
    </div>
  );
}

export default DemoPages;
