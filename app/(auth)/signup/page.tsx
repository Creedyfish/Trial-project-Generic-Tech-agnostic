"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp } from "@/queries/apiQueries";
/**
 * Type definition for the form inputs.
 * The form expects a name, email, password, repeatPassword, agreeToTerms, and agreeToPrivacyPolicy.
 * The name, email, password, and repeatPassword are strings.
 * The agreeToTerms and agreeToPrivacyPolicy are booleans.
 */
type Inputs = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  agreeToTerms: boolean;
  agreeToPrivacyPolicy: boolean;
};
/**
 * This function component represents a page where a user can sign up.
 * It uses the `useForm` hook from `react-hook-form` to handle form state and submission.
 * When the form is submitted, it attempts to sign up with the provided data.
 * If the sign up is successful, it logs the data and the response to the console and redirects the user to the home page.
 * If the sign up fails, it logs the error to the console.
 */
function Page() {
  const router = useRouter();
  const { register, control, watch, handleSubmit, formState } =
    useForm<Inputs>();
  const { errors } = formState;
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await signUp(data);

      router.push("/");
      // Handle successful Signin
    } catch (error) {
      console.error(error);

      // Handle failed Signin
    }
  };
  return (
    <div className="flex h-screen w-full justify-center">
      <div className="absolute -z-10 h-full w-full">
        <div className="absolute h-full w-full bg-gradient-to-r from-light-0 to-transparent transition-all duration-300 ease-in-out dark:from-dark-0 md:from-70% lg:from-50% xl:from-40%"></div>
        <div className="flex h-full w-full bg-light-0 transition-all duration-300 ease-in-out dark:bg-dark-0">
          <div className="h-full bg-light-0 transition-all duration-300 ease-in-out dark:bg-dark-0 md:w-2/3 lg:w-2/5"></div>
          <Image
            src="/signup-image.png"
            width={2000}
            height={2000}
            alt="bg-signup-image"
            className="hidden h-full object-cover transition-all duration-300 ease-in-out md:flex md:w-1/3 lg:w-3/5"
          />
        </div>
      </div>
      <div className="container flex h-full w-full flex-col items-center justify-center px-9 transition-all  duration-300  ease-in-out md:items-start md:px-24">
        <div className="flex h-full max-w-[375px] flex-col items-center justify-center gap-24 md:max-w-none md:items-start">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center font-payton text-2xl  text-primary transition-all duration-300 ease-in-out md:text-6xl">
              Sign up to
            </div>
            <div className="translate-y-1 transition-all duration-300 ease-in-out md:translate-y-3">
              <Image
                src={"/cooky-logo.png"}
                width={180.55}
                height={56.18}
                alt="mobile-logo"
                className="w-[4.5rem] transition-all duration-300 ease-in-out md:w-[12.75rem]"
              />
            </div>
          </div>
          <div className="flex items-start justify-start font-lexend">
            <form
              className="flex flex-col gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="  flex flex-col gap-1">
                <div className="text-xs text-primary">Name</div>
                <input
                  type="text"
                  className="w-full rounded-full bg-bg-input px-4 py-2 text-base text-dark-0 outline-none dark:bg-dark-1 dark:text-light-0"
                  {...register("name", { required: "Name is required" })}
                />
              </label>
              <label className="  flex flex-col gap-1">
                <div className="text-xs text-primary">Email Address</div>
                <input
                  type="email"
                  className="w-full rounded-full bg-bg-input px-4 py-2 text-base text-dark-0 outline-none dark:bg-dark-1 dark:text-light-0"
                  {...register("email", {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </label>

              <label className="  flex flex-col gap-1">
                <div className="text-xs text-primary">Password</div>
                <input
                  type="password"
                  className="w-full rounded-full bg-bg-input px-4 py-2 text-base text-dark-0 outline-none dark:bg-dark-1 dark:text-light-0"
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
              <label className="  flex flex-col gap-1">
                <div className="text-xs text-primary">Repeat Password</div>
                <input
                  type="password"
                  className="w-full rounded-full bg-bg-input px-4 py-2 text-base text-dark-0 outline-none dark:bg-dark-1 dark:text-light-0"
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

              <label className=" flex flex-col gap-1  text-base text-primary dark:text-light-0">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className=" text-primary accent-primary  dark:text-light-0"
                    {...register("agreeToTerms", {
                      required: "You must agree to the Terms and Conditions",
                    })}
                  />
                  I agree to the Terms and Conditions
                </div>
                <div className="text-xs text-red-error">
                  {errors.agreeToTerms?.message}
                </div>
              </label>

              <label className=" flex flex-col gap-1  text-base text-primary dark:text-light-0">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className=" border border-red-500 text-primary accent-primary dark:text-light-0"
                    {...register("agreeToPrivacyPolicy", {
                      required: "You must agree to the Privacy Policy",
                    })}
                  />
                  I agree to the Privacy Policy
                </div>
                <div className="text-xs text-red-error">
                  {errors.agreeToPrivacyPolicy?.message}
                </div>
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-primary p-2 font-normal text-light-0"
              >
                Sign Up
              </button>
              <div className="flex justify-center gap-1 text-xs">
                <div className="">Already have an account?</div>
                <Link
                  href={"/login"}
                  className="font-bold text-primary underline"
                >
                  Log In instead
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
