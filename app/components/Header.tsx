import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <nav className="w-full flex items-center justify-between bg-primary py-4 px-5">
      <Link href={"/"} className="">
        <Image src={"/cooky.png"} width={165.01} height={51.35} alt="logo" />
      </Link>
      <button>
        <Image src={"/cog.png"} width={24} height={24} alt="cog" />
      </button>
    </nav>
  );
}

export default Header;
