import LoginForm from "@/components/auth/LoginForm";
import React, { ChangeEvent, FormEvent, useState } from "react";

export default async function Page() {
  return (
    <div className="login-container">
      <div className="text-center">
        <h1>Login to access even more amazing features</h1>
      </div>
      <LoginForm />
    </div>
  );
}
