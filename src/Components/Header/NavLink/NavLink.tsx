import React from "react";
import styles from "./styles.module.css";

interface props {
  href: string;
  text: string;
}

function NavLink(props: props) {
  const { href, text } = props;
  return (
    <li className={`${styles.wrapper} cursor-pointer max-lg:before:hidden text-white max-lg:hover:text-primary`}>
      <a className="text-inherit whitespace-nowrap font-semibold lg:hover:-translate-y-1 transition-all duration-300 inline-block max-lg:my-2" href={href}>
        {text}
      </a>
    </li>
  );
}

export default NavLink;
