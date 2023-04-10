import React from "react";
import tutor from "../../../assets/images/premium-plugins/tutor.jpg";
import zoom from "../../../assets/images/premium-plugins/zoom.jpg";
import elementor from "../../../assets/images/premium-plugins/elementor.jpg";
import MailChimp from "../../../assets/images/premium-plugins/MailChimp.jpg";
import BuddyPress from "../../../assets/images/premium-plugins/buddypress.jpg";
import WooCommerce from "../../../assets/images/premium-plugins/woocommerce.jpg";
import paidMemberShip from "../../../assets/images/premium-plugins/paid-membership.jpg";
import contactForm from "../../../assets/images/premium-plugins/contact-form.jpg";
import PremiumPluginCard from "./PremiumPluginCard";

function PremiumPlugins() {
  return (
    <section className="py-[7.5rem] bg-navy flex max-lg:flex-col max-lg:gap-12 w-full px-4">
      <div className="lg:w-2/4 max-lg:w-full flex justify-start max-lg:items-center lg:items-center flex-col gap-9">
        <h3 className="text-white font-medium max-md:text-[1.75rem] md:text-5xl">ادغام پلاگین های پریمیوم</h3>
        <p className="text-base text-[#FFFFFFCC] md:max-w-[33.75rem]">فقط مناسب ترین افزونه ها در اجومال ادغام شده اند تا به کاربران کمک کنند تا وب سایت های آموزشی قدرتمند و کاملاً کاربردی بسازند.</p>
      </div>
      <div className="lg:w-2/4 max-lg:w-full flex-center flex-wrap gap-12">
        <PremiumPluginCard image={tutor} text="Tutor LMS Pro" />
        <PremiumPluginCard image={zoom} text="Zoom" />
        <PremiumPluginCard image={elementor} text="Elementor" />
        <PremiumPluginCard image={MailChimp} text="MailChimp" />
        <PremiumPluginCard image={BuddyPress} text="BuddyPress" />
        <PremiumPluginCard image={WooCommerce} text="WooCommerce" />
        <PremiumPluginCard image={paidMemberShip} text="Paid Membership Pro" />
        <PremiumPluginCard image={contactForm} text="Contact form 7" />
      </div>
    </section>
  );
}

export default PremiumPlugins;