import LinkComponent from "@/components/shared/link-component/LinkComponent";
import React from "react";

const NavigationLinkComponents = () => {
  return (
    <div className="flex gap-4">
      <LinkComponent text="Home" href={"/"} />
      <LinkComponent text="Create Post" href={"/post/create-post"} />
    </div>
  );
};

export default NavigationLinkComponents;
