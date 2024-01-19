"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import ButtonComponent from "@/components/shared/button-component/ButtonComponent";
import { authenticate, login } from "@/services/auth.service";
import TextInputLabel from "../shared/text-input-label/TextInputLabel";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginFormSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    await authenticate(username, password);
  };

  return (
    <form className="flex flex-col items-center" onSubmit={onLoginFormSubmit}>
      <TextInputLabel
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setUsername(e.currentTarget.value);
        }}
        value={username}
        label="Username"
        placeholder="Enter a username"
      />
      <TextInputLabel
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setPassword(e.currentTarget.value);
        }}
        type="password"
        label="Password"
        placeholder="Enter a password"
      />
      <ButtonComponent text={"Login"} type="submit" />
    </form>
  );
}
