import React from "react";
import NavLink from "../NavLink/NavLink";

function NavLinks({className}) {
  return (
    <>
      <NavLink className={className} text="ویژگی ها" href="#features" />
      <NavLink className={className} text="کسب درآمد" href="#earnings" />
      <NavLink className={className} text="دموها" href="#demos" />
      <NavLink className={className} text="دوره ها" href="#courses" />
    </>
  );
}

export default NavLinks;
