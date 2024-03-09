"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full sticky top-0 z-50 flex items-center px-5  justify-center  bg-primary py-4 ">
      <div className="flex w-full max-w-[1920px] relative justify-between  ">
        <Link href={"/"} className="">
          <Image
            src={"/header-cooky-logo.png"}
            width={165.01}
            height={51.35}
            loading="lazy"
            alt="logo"
          />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image src={"/cog.png"} width={24} height={24} alt="cog" />
        </button>
        {isOpen ? <Settings /> : ""}
      </div>
    </nav>
  );
}

function Settings() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="absolute top-20 flex w-full justify-end pointer-events-none">
      <div className="p-5 gap-5 flex flex-col bg-light-0 dark:bg-dark-0 rounded-lg pointer-events-auto">
        {theme === "dark" ? (
          <button
            onClick={() => setTheme("light")}
            className="flex gap-1 items-center text-sm"
          >
            <div>
              <Image
                src={"/sun.svg"}
                loading="lazy"
                width={14}
                height={14}
                alt="sun-logo"
              />
            </div>
            <div>Light Mode</div>
          </button>
        ) : (
          <button
            onClick={() => setTheme("dark")}
            className="flex gap-1 items-center text-sm"
          >
            <div>
              <Image src={"/moon.svg"} width={14} height={14} alt="moon-logo" />
            </div>
            <div>Dark Mode</div>
          </button>
        )}

        <button
          onClick={() => router.push("/login")}
          className="flex gap-1 items-center text-sm"
        >
          <div>
            {theme === "dark" ? (
              <Image
                src={"/sign-out-dark.svg"}
                width={14}
                height={14}
                alt="sign-out-logo"
                className=""
              />
            ) : (
              <Image
                src={"/sign-out-light.svg"}
                width={14}
                height={14}
                alt="sign-out-logo"
                className=""
              />
            )}
          </div>
          <div>Log Out</div>
        </button>
      </div>
    </div>
  );
}

export default Header;
