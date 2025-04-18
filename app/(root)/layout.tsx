import Link from "next/link";
import React from "react";
import Image from "next/image";
// import { redirect } from "next/navigation";
// import { isAuthenticated } from "@/lib/actions/auth.action";

const Rootlayout = async ({ children }: { children: React.ReactNode }) => {
  // const isUserAuthenticated = await isAuthenticated();

  // if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className=" flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={24} height={24} />
          <h2 className=" text-primary-100">PrepWise</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default Rootlayout;
