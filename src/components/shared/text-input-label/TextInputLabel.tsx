import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface TextInputLabelInterface
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

export default function TextInputLabel({
  placeholder = "...",
  label = "Label",
  type = "text",
  value,
  name,
  onChange,
}: TextInputLabelInterface) {
  return (
    <label className="flex flex-col p-2">
      {label}
      <input
        type={type}
        name={name}
        className="border-[1px] border-blue-400 rounded outline-none w-min p-1"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </label>
  );
}
