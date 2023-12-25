"use client";
import ButtonComponent from "@/components/shared/button-component/ButtonComponent";
import { useSession } from "next-auth/react";
import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { UserToken } from "@/token/token-types";
import Image from "next/image";

const UserInfo = () => {
  const { data: session, status } = useSession();
  const user = session?.user as UserToken;

  const onClick = () => {
    signOut({ callbackUrl: "/" });
  };
  return status === "authenticated" ? (
    <div className="flex flex-col items-center px-2 gap-1">
      <button>
        <Link href={`/user/profile/${user.id}`}>
          <Image
            src="/default-user-icon.jpg"
            alt={"User Icon"}
            width={32}
            height={32}
          />
        </Link>
      </button>
      <ButtonComponent
        text="Sign Out"
        type="button"
        onClick={onClick}
      ></ButtonComponent>
    </div>
  ) : (
    <Link href={"/auth/login"}>Login</Link>
  );
};

export default UserInfo;
