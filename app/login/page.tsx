"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

function Page() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="w-full h-full flex justify-center relative">
      {/* <div className="w-full h-full flex justify-end items-end absolute -z-10 pointer-events-none ">
        <div className="">
          <Image
            src="/login-image.png"
            width={2000}
            height={2000}
            className="object-contain"
          />
        </div>
      </div> */}
      <div className="absolute -z-10 h-full w-full">
        <div className="absolute h-full w-full bg-gradient-to-r dark:from-dark-0 from-light-0 md:from-70% lg:from-40% to-transparent transition-all duration-300 ease-in-out"></div>
        <div className="flex w-full h-full bg-light-0 dark:bg-dark-0 transition-all duration-300 ease-in-out">
          <div className="md:w-2/3 lg:w-2/5 h-full bg-light-0 dark:bg-dark-0 transition-all duration-300 ease-in-out"></div>
          <Image
            src="/login-image.png"
            width={2000}
            height={2000}
            alt="bg-login-image"
            className="object-cover md:w-1/3 lg:w-3/5 h-full hidden md:flex transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center md:items-start md:px-24 px-9 container transition-all duration-300 ease-in-out  ">
        <div className="flex flex-col justify-center gap-24 h-full font-lexend max-w-[375px] transition-all duration-300 ease-in-out">
          <div className="flex md:w-max flex-col md:items-start justify-center text-center items-center">
            <div className="md:w-full ">
              <Image
                src={"/cooky-logo.png"}
                width={180.55}
                height={56.18}
                alt="mobile-logo"
                className="md:w-full transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="w-full md:text-base text-sm transition-all duration-300 ease-in-out">
              Recipes from all over the world
            </div>
          </div>
          <div className="w-full flex flex-col gap-24 md:gap-10 transition-all duration-300 ease-in-out">
            <form className="flex flex-col gap-6">
              <label className=" text-sm flex flex-col gap-1">
                <div className="text-primary"> Email Address </div>
                <input
                  type="email"
                  className="bg-bg-input text-dark-0 dark:text-light-0 w-full rounded-full px-4 py-1 text-lg outline-none dark:bg-dark-1"
                  {...register("email")}
                />
              </label>

              <label className=" text-sm flex flex-col gap-1">
                <div className="text-primary"> Email Address </div>
                <input
                  type="password"
                  className="bg-bg-input text-dark-0 dark:text-light-0 w-full rounded-full px-4 py-1 text-lg outline-none dark:bg-dark-1"
                  {...register("password")}
                />
              </label>

              <button className="w-full bg-primary rounded-full font-normal text-light-0 p-2">
                Log In
              </button>
            </form>
            <div className="flex gap-1 text-xs md:text-base justify-center transition-all duration-300 ease-in-out">
              <div className="">Not yet registered?</div>
              <Link
                href={"/signup"}
                className="text-primary font-bold underline"
              >
                SIGN UP NOW!
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute hidden md:flex w-full h-full bg-gradient-to-r from-red-500 from-10% to-transparent ">
        <div className="hidden -z-10 absolute md:flex w-full h-full bg-no-repeat bg-right bg-login-bg "></div>
      </div> */}

      {/* <div className="hidden absolute md:flex w-full h-full">
        <Image
          src={"/login-image.png"}
          width={4000}
          height={2000}
          alt="sdasd"
        />
      </div> */}
    </div>
  );
}

export default Page;
