import React from "react";
import NavLink from "../../../Header/NavLink/NavLink";

function NavLinks() {
  return (
    <>
      <NavLink text="ویژگی ها" href="#features" />
      <NavLink text="ویدئوهای آموزشی" href="#tutorials" />
      <NavLink text="دموها" href="#demos" />
      <NavLink text="دوره ها" href="#courses" />
    </>
  );
}

export default NavLinks;
