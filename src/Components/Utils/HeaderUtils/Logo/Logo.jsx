import React from "react";
import logo from "../../../../assets/images/logo.png";

function Logo() {
  return (
    <div onClick={() => window.scrollTo({ top: 0 })} className="flex-center h-full cursor-pointer">
      <img className="max-w-[9.375rem] lg:ml-4" src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
