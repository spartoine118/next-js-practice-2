import Link from "next/link";
import React from "react";

const NavigationLinks = () => {
  return (
    <div className="flex gap-4">
      <Link href={"/"}>Home</Link>
      <Link href={"/post/create-post"}>Create Post</Link>
    </div>
  );
};

export default NavigationLinks;
