import React, { ChangeEvent } from "react";

interface TextAreaLabelComponentInterface {
  placeholder?: string;
  label?: string;
  value?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaLabelComponent = ({
  placeholder = "...",
  label = "Label",
  value,
  onChange,
}: TextAreaLabelComponentInterface) => {
  return (
    <label className="flex flex-col p-2">
      {label}
      <textarea
        className="border-[1px] border-blue-400 rounded outline-none p-1 resize-none w-[20rem] h-32"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></textarea>
    </label>
  );
};

export default TextAreaLabelComponent;
