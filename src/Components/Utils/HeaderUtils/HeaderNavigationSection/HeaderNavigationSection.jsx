import React from "react";
import NavLinks from "../NavLinks/NavLinks";

function HeaderNavigationSection() {
  return (
    <div className="flex items-center">
      <div className="hidden lg:block">
        <ul className="ml-10 flex items-baseline gap-10">
          <NavLinks />
        </ul>
      </div>
    </div>
  );
}

export default HeaderNavigationSection;
