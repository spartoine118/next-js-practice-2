import { RegisterFormInterface } from "@/components/auth/RegisterForm";
import { User, UserWithId } from "@/database/types/types";
import { InsertOneResult } from "mongodb";
import { signIn } from "next-auth/react";

export async function authenticate(username: string, password: string) {
  const res = await signIn("credentials", {
    callbackUrl: "/",
    username: username,
    password: password,
  });
}

export async function register(
  formData: RegisterFormInterface
): Promise<InsertOneResult<User>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/api/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );
  const user: InsertOneResult<User> = await res.json();
  return user;
}