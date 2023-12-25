import Link from "next/link";
import React from "react";

interface LinkComponentInterface {
  href: string;
  text?: string;
}
const LinkComponent = ({ href, text }: LinkComponentInterface) => {
  return (
    <Link className="hover:text-red-500 hover:ease-in duration-100" href={href}>
      {text}
    </Link>
  );
};

export default LinkComponent;
