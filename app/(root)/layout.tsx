import Link from "next/link";
import React from "react";
import Image from "next/image";

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
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
