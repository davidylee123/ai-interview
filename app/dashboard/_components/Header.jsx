"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  });

  return (
    <div className="flex p-7 items-center justify-between bg-secondary shadow-sm">
      <Image src={"/logo.svg"} width={80} height={40} alt="logo" />
      <div className="text-center">
        <span className="text-primary font-bold text-3xl block">
          AI Mock Interview
        </span>
        <span className="text-black text-sm">by David Lee</span>
      </div>
      <UserButton />
    </div>
  );
}

export default Header;
