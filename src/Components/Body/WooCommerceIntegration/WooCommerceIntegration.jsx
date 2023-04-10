import React from "react";
import image from "../../../assets/images/WooCommerceIntegration.jpg";
import WooCommerceIntegrationCard from "./WooCommerceIntegrationCard";

function WooCommerceIntegration() {
  return (
    <section className="py-[7.5rem] flex max-md:flex-col max-md:gap-8 md:gap-24">
      <div className="max-md:w-full md:w-2/4 flex justify-end items-start">
        <img src={image} alt="WooCommerce Integration" className="shadow-md border-[0.625rem] rounded-[1.25rem] border-black self-start" />
      </div>
      <div className="max-md:w-full md:w-2/4 flex flex-col justify-start items-start">
        <h3 className="font-medium max-md:text-[1.75rem] md:text-5xl line_after mb-[4.6875rem]">ادغام ووکامرس</h3>
        <div className="w-full flex flex-col">
          <WooCommerceIntegrationCard counter="۰۱" text="فروش هر چیزی از محصولات دیجیتال گرفته تا فیزیکی با افزونه ووکامرس." />
          <WooCommerceIntegrationCard counter="۰۲" text="راه اندازی سیستم پرداخت با محبوب ترین روش های پرداخت: پی پال، استریپ، حواله بانکی." />
          <WooCommerceIntegrationCard counter="۰۳" text="داشتن گزارش کامل از فروش خود در هر زمان." />
        </div>
      </div>
    </section>
  );
}

export default WooCommerceIntegration;
