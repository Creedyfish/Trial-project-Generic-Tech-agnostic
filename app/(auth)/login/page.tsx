"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { login } from "@/queries/apiQueries";
import { useRouter } from "next/navigation";
/**
 * Type definition for the form inputs.
 * The form expects an email and a password, both of which are strings.
 */
type Inputs = {
  email: string;
  password: string;
};
/**
 * This function component represents a page where a user can log in.
 * It uses the `useForm` hook from `react-hook-form` to handle form state and submission.
 * When the form is submitted, it attempts to log in with the provided email and password.
 * If the login is successful and the user is an admin, it stores "admin" in local storage.
 * If the user is not an admin, it stores "user" in local storage.
 * After successful login, it redirects the user to the home page.
 * If the login fails, it logs the error to the console.
 */
function Page() {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await login(data);

      if (response.data.isAdmin) {
        localStorage.setItem("user", "admin");
      } else {
        localStorage.setItem("user", "user");
      }

      router.push("/");

      // Handle successful login
    } catch (error) {
      console.error(error);

      // Handle failed login
    }
  };
  return (
    <div className="flex h-screen w-full justify-center">
      <div className="absolute -z-10 h-full w-full">
        <div className="absolute h-full w-full bg-gradient-to-r from-light-0 to-transparent transition-all duration-300 ease-in-out dark:from-dark-0 md:from-70% lg:from-50% xl:from-40%"></div>
        <div className="flex h-full w-full bg-light-0 transition-all duration-300 ease-in-out dark:bg-dark-0">
          <div className="h-full bg-light-0 transition-all duration-300 ease-in-out dark:bg-dark-0 md:w-2/3 lg:w-2/5"></div>
          <Image
            src="/login-image.png"
            width={2000}
            height={2000}
            alt="bg-login-image"
            className="hidden h-full object-cover transition-all duration-300 ease-in-out md:flex md:w-1/3 lg:w-3/5"
          />
        </div>
      </div>

      <div className="container flex h-full w-full flex-col items-center justify-center px-9 transition-all duration-300 ease-in-out md:items-start md:px-24  ">
        <div className="flex h-full max-w-[375px] flex-col justify-center gap-24 font-lexend transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center text-center md:w-max md:items-start">
            <div className="md:w-full ">
              <Image
                src={"/cooky-logo.png"}
                width={180.55}
                height={56.18}
                alt="mobile-logo"
                className="transition-all duration-300 ease-in-out md:w-full"
              />
            </div>
            <div className="w-full text-[.625rem] transition-all duration-300 ease-in-out md:text-base">
              Recipes from all over the world
            </div>
          </div>
          <div className="flex w-full flex-col gap-24 transition-all duration-300 ease-in-out md:gap-10">
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="  flex flex-col gap-1">
                <div className="text-xs text-primary"> Email Address </div>
                <input
                  type="email"
                  className="w-full rounded-full bg-bg-input px-4 py-2 text-base text-dark-0 outline-none dark:bg-dark-1 dark:text-light-0"
                  {...register("email")}
                />
              </label>

              <div className="flex flex-col gap-1">
                <label className="  flex flex-col gap-1">
                  <div className="text-xs text-primary"> Password </div>
                  <input
                    type="password"
                    className="w-full rounded-full bg-bg-input px-4 py-2 text-base text-dark-0 outline-none dark:bg-dark-1 dark:text-light-0"
                    {...register("password")}
                  />
                </label>
                <button
                  type="button"
                  className="hidden self-end text-xs text-secondary md:flex"
                >
                  Forgot Password
                </button>
              </div>

              <button
                type="submit"
                className="w-[288px] rounded-full bg-primary p-2 font-normal text-light-0"
              >
                Log In
              </button>
            </form>

            <div className="flex items-center justify-center gap-1 text-xs transition-all duration-300 ease-in-out md:text-base">
              <div className="text-xs md:text-base">Not yet registered?</div>
              <Link
                href={"/signup"}
                className="text-xs font-bold text-primary underline md:text-xl"
              >
                SIGN UP NOW!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
