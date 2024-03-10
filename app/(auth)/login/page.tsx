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
    <div className="w-full h-screen flex justify-center">
      <div className="absolute -z-10 h-full w-full">
        <div className="absolute h-full w-full bg-gradient-to-r dark:from-dark-0 from-light-0 md:from-70% lg:from-50% xl:from-40% to-transparent transition-all duration-300 ease-in-out"></div>
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
            <div className="w-full md:text-base text-[.625rem] transition-all duration-300 ease-in-out">
              Recipes from all over the world
            </div>
          </div>
          <div className="w-full flex flex-col gap-24 md:gap-10 transition-all duration-300 ease-in-out">
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="  flex flex-col gap-1">
                <div className="text-primary text-xs"> Email Address </div>
                <input
                  type="email"
                  className="bg-bg-input text-dark-0 dark:text-light-0 w-full rounded-full px-4 py-2 text-base outline-none dark:bg-dark-1"
                  {...register("email")}
                />
              </label>

              <div className="flex flex-col gap-1">
                <label className="  flex flex-col gap-1">
                  <div className="text-primary text-xs"> Password </div>
                  <input
                    type="password"
                    className="bg-bg-input text-dark-0 dark:text-light-0 w-full rounded-full px-4 py-2 text-base outline-none dark:bg-dark-1"
                    {...register("password")}
                  />
                </label>
                <button
                  type="button"
                  className="text-secondary hidden md:flex text-xs self-end"
                >
                  Forgot Password
                </button>
              </div>

              <button
                type="submit"
                className="w-[288px] bg-primary rounded-full font-normal text-light-0 p-2"
              >
                Log In
              </button>
            </form>

            <div className="flex gap-1 text-xs md:text-base justify-center items-center transition-all duration-300 ease-in-out">
              <div className="text-xs md:text-base">Not yet registered?</div>
              <Link
                href={"/signup"}
                className="text-primary text-xs md:text-xl font-bold underline"
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
