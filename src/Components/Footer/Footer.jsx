import React from "react";
import BuyProButton from "../Utils/Buttons/BuyProButton/BuyProButton";

function Footer() {
  return (
    <footer className="w-full bg-[#F8F8F8] px-4 flex justify-start items-center flex-col py-24 gap-8">
      <h3 className="text-3xl text-center font-medium text-primary">راه حلی هوشمند برای پلتفرم آموزش الکترونیکی</h3>
      <p className="max-md:text-[1.75rem] md:text-[3rem] font-medium text-navy max-w-3xl text-center max-md:leading-[2.5rem] md:leading-[3.5rem]">همین امروز وب سایت آموزش خود را با اجومال راه اندازی کنید</p>
        <BuyProButton className="flex-center max-sm:hidden text-black" />
    </footer>
  );
}

export default Footer;
