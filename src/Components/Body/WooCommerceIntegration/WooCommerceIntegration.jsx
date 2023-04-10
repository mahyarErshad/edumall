import React from "react";
import image from "../../../assets/images/WooCommerceIntegration.jpg";
import WooCommerceIntegrationCard from "./WooCommerceIntegrationCard";

function WooCommerceIntegration() {
  return (
    <section className="py-[7.5rem] flex max-md:flex-col md:gap-24">
      <div className="max-md:w-full md:w-2/4 flex justify-end items-start">
        <img src={image} alt="WooCommerce Integration" className="shadow-md border-[0.625rem] rounded-[1.25rem] border-black self-start" />
      </div>
      <div className="max-md:w-full md:w-2/4 flex flex-col justify-start items-start">
        <h3 className="font-medium max-md:text-[1.75rem] md:text-5xl line_after mb-[4.6875rem]">ادغام ووکامرس</h3>
        <div className="w-full flex flex-col gap-2">
          <WooCommerceIntegrationCard counter="۰۱" text="بخش ها و ترتیب درس های خود را تنظیم و سفارشی کنید." hasDots />
          <WooCommerceIntegrationCard counter="۰۲" text="دانش آموزان تا پایان درس قبلی نمی توانند به درس بعدی دسترسی داشته باشند." hasDots />
          <WooCommerceIntegrationCard counter="۰۳" text="مدیر، مربیان می توانند درس را تا زمان شروع قفل کنند." />
        </div>
      </div>
    </section>
  );
}

export default WooCommerceIntegration;
