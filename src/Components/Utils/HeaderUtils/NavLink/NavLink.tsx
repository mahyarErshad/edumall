import React from "react";
import styles from "./styles.module.css";

interface props {
  href: string;
  text: string;
  className?: string;
}

function NavLink(props: props) {
  const { href, text, className } = props;
  return (
    <li className={`${styles.wrapper} ${className} cursor-pointer max-lg:before:hidden text-white max-lg:hover:text-secondary`}>
      <a className="text-inherit whitespace-nowrap font-semibold transition-all duration-300 inline-block max-lg:my-2" href={href}>
        {text}
      </a>
    </li>
  );
}

export default NavLink;
