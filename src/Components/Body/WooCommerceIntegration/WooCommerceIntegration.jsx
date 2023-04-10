import React from "react";
import image from "../../../assets/images/WooCommerceIntegration.jpg";
import WooCommerceIntegrationCard from "./WooCommerceIntegrationCard";
import wooCommerceLogo from "../../../assets/images/woocommerce-logo-purple.jpg";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function WooCommerceIntegration() {
  return (
    <section className="py-[7.5rem] flex max-md:flex-col max-md:gap-8 md:gap-24">
      <div className="max-md:w-full md:w-2/4 flex justify-center md:justify-end items-start relative">
        <MouseParallaxContainer containerStyle={{ position: "absolute", overflow: "visible" }} resetOnLeave={true} useWindowMouseEvents={true} globalFactorX={0.1} globalFactorY={0.1} className="max-lg:hidden h-full w-full">
          <MouseParallaxChild className="bg-gradient-to-b from-[#AFE84F] to-[#55A229] h-5 w-5 absolute right-[20%] circle" inverted={true} />
          <MouseParallaxChild className="absolute left-0 top-0" inverted={true}>
            <img src={wooCommerceLogo} alt="woocommerce logo" className="rounded-[1.6875rem] shadow-md" />
          </MouseParallaxChild>
          <MouseParallaxChild className="absolute right-[20%] bottom-[10%]">
            <FontAwesomeIcon color="#fff" icon={faCartShopping} className="p-6 bg-primary rounded-[1.6875rem] shadow-md w-14 h-14 mirror" />
          </MouseParallaxChild>
          <MouseParallaxChild className="absolute left-0 bottom-[10%] bg-gradient-to-b from-[#529CFD] to-[#75C9FD] h-[1.625rem] w-[1.625rem] circle" />
        </MouseParallaxContainer>
        <img src={image} alt="WooCommerce Integration" className="shadow-md border-[0.625rem] rounded-[1.25rem] border-black self-start" />
      </div>
      <div className="max-md:w-full md:w-2/4 flex flex-col justify-start items-start">
        <h3 className="font-medium max-md:self-center max-md:text-[1.75rem] md:text-5xl mb-[4.6875rem]">
          ادغام <strong className="line_after">ووکامرس</strong>
        </h3>
        <div className="w-full flex flex-col">
          <WooCommerceIntegrationCard counter="۰۱" text="فروش هر چیزی از محصولات دیجیتال گرفته تا فیزیکی با افزونه ووکامرس." hasDots />
          <WooCommerceIntegrationCard counter="۰۲" text="راه اندازی سیستم پرداخت با محبوب ترین روش های پرداخت: پی پال، استریپ، حواله بانکی." hasDots />
          <WooCommerceIntegrationCard counter="۰۳" text="داشتن گزارش کامل از فروش خود در هر زمان." />
        </div>
      </div>
    </section>
  );
}

export default WooCommerceIntegration;
