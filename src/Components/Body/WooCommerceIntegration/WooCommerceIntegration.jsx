import React from "react";
import image from "../../../assets/images/WooCommerceIntegration.jpg";

function WooCommerceIntegration() {
  return (
    <section className="py-[7.5rem] flex max-md:flex-col md:gap-24">
      <img src={image} alt="WooCommerce Integration" className="shadow-md border-[0.625rem] rounded-[1.25rem] border-black" />
    </section>
  );
}

export default WooCommerceIntegration;
