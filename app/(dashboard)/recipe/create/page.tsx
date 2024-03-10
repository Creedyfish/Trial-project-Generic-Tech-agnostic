"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { modules, formats } from "@/utils/reactQuillModule";
import { SaveSuccessModal } from "@/app/components/Modals";
import {
  useForm,
  SubmitHandler,
  Controller,
  useController,
} from "react-hook-form";
import { useState } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { addRecipe } from "@/queries/apiQueries";
/**
 * Type definition for the form inputs.
 * The form expects a name, prep_time, servings, main_image, ingredients, and procedures.
 * The name, ingredients, and procedures are strings.
 * The prep_time and servings are numbers.
 * The main_image is of any type.
 */
type Inputs = {
  name: string;
  prep_time: number;
  servings: number;
  main_image: any;
  ingredients: string;
  procedures: string;
};
/**
 * This function component represents a page where a user can add a recipe.
 * It uses the `useForm` hook from `react-hook-form` to handle form state and submission.
 * It also uses the `useState` hook to manage state for the file name and a boolean value indicating whether a modal is open.
 * When the form is submitted, it attempts to add a recipe with the provided data.
 * If the recipe is added successfully, it logs the data and the response to the console and opens a modal.
 * If the recipe fails to be added, it logs the error to the console.
 */
function Page() {
  const { register, control, handleSubmit, setValue, watch, formState } =
    useForm<Inputs>();
  const { errors } = formState;
  const [cfileName, setCFileName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const recipeName = watch("name");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await addRecipe(data);

      setIsOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SaveSuccessModal open={isOpen} setIsOpen={setIsOpen} name={recipeName} />
      <div className="relative flex h-full w-full justify-center">
        <div className="absolute -z-0 h-full w-full">
          <div className="absolute h-full w-full bg-gradient-to-r from-light-0 to-transparent transition-all duration-300  ease-in-out dark:from-dark-0 md:from-70% lg:from-60%"></div>
          <div className="flex h-full w-full bg-light-0 transition-all duration-300 ease-in-out dark:bg-dark-0">
            <div className="h-full bg-light-0 transition-all duration-300 ease-in-out dark:bg-dark-0 md:w-2/3 lg:w-2/5"></div>
            <Image
              src="/create-image.png"
              width={2000}
              height={2000}
              alt="bg-create-image"
              loading="lazy"
              className="hidden h-full object-cover transition-all duration-300 ease-in-out md:flex md:w-1/3 lg:w-3/5"
            />
          </div>
        </div>

        <div className="container z-10 flex h-full w-full flex-col items-center justify-center px-9 py-5 transition-all duration-300 ease-in-out md:items-start md:px-24 md:pt-24">
          <div className="h-full w-full transition-all duration-300 ease-in-out  md:w-2/3 lg:w-3/5 xl:w-1/2">
            <div className="flex h-full w-full flex-col gap-10 ">
              <Link
                href={"/"}
                className="flex items-center gap-2 font-lexend text-sm font-semibold text-dark-0 transition-all duration-100 ease-in-out dark:text-light-0"
              >
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 33 28"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-dark-0 transition-all duration-300 ease-in-out dark:fill-light-0"
                >
                  <path d="M32.4297 14.5C32.4297 15.7656 31.4453 16.75 30.25 16.75H8.66406L16.0469 24.2031C16.9609 25.0469 16.9609 26.5234 16.0469 27.3672C15.625 27.7891 15.0625 28 14.5 28C13.8672 28 13.3047 27.7891 12.8828 27.3672L1.63281 16.1172C0.71875 15.2734 0.71875 13.7969 1.63281 12.9531L12.8828 1.70312C13.7266 0.789062 15.2031 0.789062 16.0469 1.70312C16.9609 2.54688 16.9609 4.02344 16.0469 4.86719L8.66406 12.25H30.25C31.4453 12.25 32.4297 13.3047 32.4297 14.5Z" />
                </svg>
                <div>Back to Feed</div>
              </Link>
              <div className="hidden font-payton text-[2rem] leading-[2.5rem] text-primary md:flex">
                New Recipe
              </div>
              <form
                className="flex w-full flex-col gap-6 font-lexend"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label className="flex w-full flex-col gap-1">
                  <div className="text-xs text-primary md:text-xl">
                    Recipe Name
                  </div>
                  <input
                    className="w-full rounded-full bg-bg-input px-4 py-[0.625rem] text-base outline-none dark:bg-dark-1"
                    type="text"
                    {...register("name", {
                      required: "Recipe name is required",
                    })}
                  />
                  <div className="text-xs text-red-error">
                    {errors.name?.message}
                  </div>
                </label>

                <div className="flex gap-3">
                  <label className="flex w-full flex-col gap-1">
                    <div className="text-xs text-primary md:text-xl ">
                      Number of Servings
                    </div>
                    <input
                      className="w-full rounded-full bg-bg-input px-4 py-[0.625rem] text-base outline-none dark:bg-dark-1"
                      type="number"
                      min={1}
                      defaultValue={1}
                      {...register("servings", { min: 1 })}
                    />
                  </label>
                  <label className="flex w-full flex-col gap-1">
                    <div className="text-xs text-primary md:text-xl">
                      Preparation Time
                    </div>
                    <input
                      className="w-full rounded-full bg-bg-input px-4 py-[0.625rem] text-base outline-none dark:bg-dark-1"
                      type="number"
                      step="5"
                      placeholder="Number of minutes"
                      {...register("prep_time")}
                    />
                  </label>
                </div>
                <div className="flex flex-col ">
                  <div className="text-xs text-primary md:text-xl">
                    Main Image
                  </div>
                  <div className="relative flex items-center justify-end">
                    <label className="flex w-full flex-col gap-1">
                      <input
                        className="w-full rounded-full bg-bg-input px-4 py-[0.625rem] text-base outline-none dark:bg-dark-1"
                        type="text"
                        value={cfileName}
                        onChange={(event) => {
                          setCFileName(event.target.value);
                          setValue("main_image", event.target.value);
                        }}
                      />
                    </label>
                    <div className="absolute mx-[.325rem] flex items-center justify-center">
                      <label
                        htmlFor="files"
                        className="w-full cursor-pointer rounded-full bg-primary px-5 py-2 text-xs text-light-0"
                      >
                        Browse
                        <Controller
                          control={control}
                          name={"main_image"}
                          render={({
                            field: { value, onChange, ...field },
                          }) => {
                            return (
                              <input
                                className="w-0"
                                {...field}
                                value={value?.fileName}
                                onChange={(event) => {
                                  const file = !!event.target.files?.length
                                    ? event.target.files[0].name
                                    : null;
                                  if (file) {
                                    setCFileName(file);
                                    onChange(file);
                                  }
                                }}
                                type="file"
                                id="files"
                              />
                            );
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-1">
                  <div className="text-xs text-primary md:text-xl">
                    Ingredients
                  </div>
                  <Controller
                    name="ingredients"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <ReactQuill
                        theme="snow"
                        formats={formats}
                        modules={modules}
                        value={field.value}
                        onChange={field.onChange}
                        className="w-full"
                      />
                    )}
                  />
                </div>
                <div className="text-xs text-primary md:text-xl">Procedure</div>
                <div className="flex w-full flex-col gap-1">
                  <Controller
                    name="procedures"
                    control={control}
                    defaultValue={""}
                    render={({ field }) => (
                      <ReactQuill
                        theme="snow"
                        formats={formats}
                        modules={modules}
                        value={field.value}
                        onChange={field.onChange}
                        className=" w-full"
                      />
                    )}
                  />
                </div>
                <div className="flex w-full">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary px-4 py-2 font-lexend text-sm text-light-0 md:w-auto md:text-base"
                  >
                    Publish Recipe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
