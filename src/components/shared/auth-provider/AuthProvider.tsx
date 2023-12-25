"use client";

import { SessionProvider } from "next-auth/react";

interface AuthProviderInterface {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderInterface) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
