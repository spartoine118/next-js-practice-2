"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import ButtonComponent from "../shared/button-component/ButtonComponent";
import TextInputLabel from "../shared/text-input-label/TextInputLabel";
import { authenticate, register } from "@/services/auth.service";

export interface RegisterFormInterface {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<RegisterFormInterface>({});

  const onRegisterFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await register(formData);
    if (res.acknowledged) {
      authenticate(formData.email ?? "", formData.password ?? "");
    }
  };

  const onTextInputLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onRegisterFormSubmit}>
      <div>
        <TextInputLabel
          onChange={onTextInputLabelChange}
          name="firstName"
          label="First Name"
          placeholder="Enter your first name"
        />
        <TextInputLabel
          onChange={onTextInputLabelChange}
          name="lastName"
          label="Last Name"
          placeholder="Enter your last name"
        />
        <TextInputLabel
          onChange={onTextInputLabelChange}
          name="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
        <TextInputLabel
          onChange={onTextInputLabelChange}
          name="phoneNumber"
          label="Phone Number"
          placeholder="Enter your phone number"
        />
        <TextInputLabel
          onChange={onTextInputLabelChange}
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex justify-center">
        <ButtonComponent text="Create account" type="submit" />
      </div>
    </form>
  );
}
