import React from "react";
import logo from "../../../../assets/images/logo.png";
import darkLogo from "../../../../assets/images/dark-logo.png";

function Logo({ dark }) {
  return (
    <div onClick={() => document.getElementById("container").scrollTo({ top: 0 })} className="flex-center h-full cursor-pointer">
      <img className="max-w-[9.375rem]" src={dark ? darkLogo : logo} alt="Logo" />
    </div>
  );
}

export default Logo;
