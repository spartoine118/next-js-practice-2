import { NextRequest } from "next/server";
import { db } from "@/database/connection";
import { User } from "@/database/types/types";
import { RegisterFormInterface } from "@/components/auth/RegisterForm";

export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(request: NextRequest) {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
  }: RegisterFormInterface = await request.json();
  const query: User = {
    firstName: firstName ?? "def",
    lastName: lastName ?? "def",
    email: email ?? "def",
    linkedInProfile: "",
    alias: "",
    phoneNumber: phoneNumber ?? "def",
    password: password ?? "def",
  };
  const res = await db.collection<User>("users").insertOne(query);
  return Response.json(res);
}
