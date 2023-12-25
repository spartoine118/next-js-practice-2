import { ChangeEvent } from "react";

export interface TextInputLabelInterface {
  placeholder?: string;
  label?: string;
  value?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInputLabel({
  placeholder = "...",
  label = "Label",
  type = "text",
  value,
  onChange,
}: TextInputLabelInterface) {
  return (
    <label className="flex flex-col p-2">
      {label}
      <input
        type={type}
        className="border-[1px] border-blue-400 rounded outline-none w-min p-1"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </label>
  );
}
