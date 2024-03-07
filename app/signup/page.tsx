"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";

function page() {
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
      <div className="w-full h-full flex flex-col justify-center md:items-start md:px-24 px-9  container  ">
        <div className="flex flex-col justify-center gap-24 h-full ">
          <div className="flex items-center gap-1 ">
            <div className="text-2xl flex items-center text-primary">
              Sign up to
            </div>
            <div className="">
              <Image
                src={"/cooky-logo.png"}
                width={180.55}
                height={56.18}
                alt="mobile-logo"
                className=""
              />
            </div>
          </div>
          <div className="w-full">
            <form className="flex flex-col gap-5">
              <label className="text-primary text-sm flex flex-col gap-1">
                Name{" "}
                <input
                  type="text"
                  className="bg-bg-input rounded-full text-dark-0 dark:text-light-0 w-full px-4 py-1 text-lg outline-none dark:bg-dark-1"
                  {...register("name")}
                />
              </label>
              <label className="text-primary text-sm flex flex-col gap-1">
                Email Address{" "}
                <input
                  type="email"
                  className="bg-bg-input rounded-full text-dark-0 dark:text-light-0 w-full px-4 py-1 text-lg outline-none dark:bg-dark-1"
                  {...register("email")}
                />
              </label>

              <label className="text-primary text-sm flex flex-col gap-1">
                Password
                <input
                  type="password"
                  className="bg-bg-input text-dark-0 dark:text-light-0 w-full rounded-full px-4 py-1 text-lg outline-none dark:bg-dark-1"
                  {...register("password")}
                />
              </label>
              <label className="text-primary text-sm flex flex-col gap-1">
                Repeat Password
                <input
                  type="password"
                  className="bg-bg-input text-primary dark:text-light-0 w-full rounded-full px-4 py-1 text-lg outline-none dark:bg-primary"
                  {...register("repeatPassword")}
                />
              </label>

              <label className="text-dark-0 flex text-sm gap-2">
                <input
                  type="checkbox"
                  className=" accent-primary"
                  {...register("agreeToTerms")}
                />
                I agree to the Terms and Conditions
              </label>

              <label className="text-dark-0 flex text-sm gap-2">
                <input
                  type="checkbox"
                  className=" accent-primary"
                  {...register("agreeToPrivacyPolicy")}
                />
                I agree to the Privacy Policy
              </label>

              <button className="w-full bg-primary rounded-full font-normal text-light-0 p-2">
                Sign Up
              </button>
              <div className="flex gap-2 text-xs justify-center">
                <div className="">Already have an account?</div>
                <div className="text-primary font-bold">Log In instead</div>
              </div>
            </form>
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

export default page;
