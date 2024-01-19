import React from "react";

export interface ButtonComponentInterface
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
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
