import { signIn } from "next-auth/react";

export async function authenticate(username: string, password: string) {
  const res = await signIn("credentials", {
    callbackUrl: "/",
    username: username,
    password: password,
  });
}
