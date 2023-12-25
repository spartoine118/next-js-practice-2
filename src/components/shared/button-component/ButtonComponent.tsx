import React from "react";

export interface ButtonComponentInterface {
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ButtonComponent = ({ text, type, onClick }: ButtonComponentInterface) => {
  return (
    <button
      className="border-2 border-red-300 p-2 hover:border-red-400 hover:bg-red-400 hover:ease-in duration-100 rounded w-fit"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
