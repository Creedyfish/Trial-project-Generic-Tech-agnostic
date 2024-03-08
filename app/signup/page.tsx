"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { DevTool } from "@hookform/devtools";
import { useRouter } from "next/navigation";
import { SignUp } from "@/queries/apiQueries";
type Inputs = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  agreeToTerms: boolean;
  agreeToPrivacyPolicy: boolean;
};
function Page() {
  const router = useRouter();
  const { register, control, watch, handleSubmit, formState } =
    useForm<Inputs>();
  const { errors } = formState;
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await SignUp(data);

      console.log({ data: data, response });

      // Handle successful login
    } catch (error) {
      console.error(error);

      // Handle failed login
    }
  };
  return (
    <div className="w-full h-full flex justify-center relative">
      <div className="absolute -z-10 h-full w-full">
        <div className="absolute h-full w-full bg-gradient-to-r dark:from-dark-0 from-light-0 md:from-70% lg:from-[40%] to-transparent transition-all duration-300 ease-in-out"></div>
        <div className="flex w-full h-full bg-light-0 dark:bg-dark-0 transition-all duration-300 ease-in-out">
          <div className="md:w-2/3 lg:w-2/5 h-full bg-light-0 dark:bg-dark-0 transition-all duration-300 ease-in-out"></div>
          <Image
            src="/signup-image.png"
            width={2000}
            height={2000}
            alt="bg-signup-image"
            className="object-cover md:w-1/3 lg:w-3/5 h-full hidden md:flex transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center md:items-start md:px-24 px-9  container  transition-all duration-300 ease-in-out">
        <div className="flex flex-col justify-center md:items-start items-center gap-24 h-full max-w-[375px] md:max-w-none">
          <div className="flex items-center gap-2 justify-center">
            <div className="text-2xl md:text-6xl flex items-center  font-payton text-primary transition-all duration-300 ease-in-out">
              Sign up to
            </div>
            <div className="translate-y-1 md:translate-y-3 transition-all duration-300 ease-in-out">
              <Image
                src={"/cooky-logo.png"}
                width={180.55}
                height={56.18}
                alt="mobile-logo"
                className="w-[4.5rem] md:w-[12.75rem] transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="items-start flex justify-start font-lexend">
            <form
              className="flex flex-col gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className=" text-sm flex flex-col gap-1">
                <div className="text-primary">Name</div>
                <input
                  type="text"
                  className="bg-bg-input text-dark-0 dark:text-light-0 w-full rounded-full px-4 py-1 text-lg outline-none dark:bg-dark-1"
                  {...register("name", { required: "Name is required" })}
                />
              </label>
              <label className=" text-sm flex flex-col gap-1">
                <div className="text-primary">Email Address</div>
                <input
                  type="email"
                  className="bg-bg-input rounded-full text-dark-0 dark:text-light-0 w-full px-4 py-1 text-lg outline-none dark:bg-dark-1"
                  {...register("email", {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </label>

              <label className=" text-sm flex flex-col gap-1">
                <div className="text-primary">Password</div>
                <input
                  type="password"
                  className="bg-bg-input text-dark-0 dark:text-light-0 w-full rounded-full px-4 py-1 text-lg outline-none dark:bg-dark-1"
                  {...register("password", {
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                />
                <div className="text-xs text-red-error">
                  {errors.password?.message}
                </div>
              </label>
              <label className=" text-sm flex flex-col gap-1">
                <div className="text-primary">Repeat Password</div>
                <input
                  type="password"
                  className="bg-bg-input text-dark-0 dark:text-light-0 w-full rounded-full px-4 py-1 text-lg outline-none dark:bg-dark-1"
                  {...register("repeatPassword", {
                    validate: (value) =>
                      value === watch("password") ||
                      "The passwords do not match",
                  })}
                />
                <div className="text-xs text-red-error">
                  {errors.repeatPassword?.message}
                </div>
              </label>

              <label className=" flex text-sm gap-2 text-primary dark:text-light-0">
                <input
                  type="checkbox"
                  className=" accent-primary text-primary dark:text-light-0"
                  {...register("agreeToTerms", {
                    required: "You must agree to the Terms and Conditions",
                  })}
                />
                I agree to the Terms and Conditions
              </label>

              <label className=" flex text-sm gap-2 text-primary dark:text-light-0">
                <input
                  type="checkbox"
                  className=" accent-primary text-primary dark:text-light-0 border border-red-500"
                  {...register("agreeToPrivacyPolicy", {
                    required: "You must agree to the Privacy Policy",
                  })}
                />
                I agree to the Privacy Policy
              </label>

              <button
                type="submit"
                className="w-full bg-primary rounded-full font-normal text-light-0 p-2"
              >
                Sign Up
              </button>
              <div className="flex gap-1 text-xs justify-center">
                <div className="">Already have an account?</div>
                <Link
                  href={"/login"}
                  className="text-primary font-bold underline"
                >
                  Log In instead
                </Link>
              </div>
            </form>
            <DevTool control={control} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
