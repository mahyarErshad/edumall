import React from "react";

function CourseLayout() {
  return (
    <section className="px-4 py-10 w-full flex flex-col bg-navy">
      <div className="flex-center max-md:flex-col-reverse">
        <div className="flex justify-start max-md:w-full md:w-2/4"></div>
        <div className="flex justify-start max-md:w-full md:w-2/4"></div>
      </div>
    </section>
  );
}

export default CourseLayout;
