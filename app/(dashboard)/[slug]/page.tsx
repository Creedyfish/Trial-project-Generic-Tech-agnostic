"use client";
import React from "react";
import data from "@/data.json";
import Image from "next/image";
import Link from "next/link";
import { DeleteModal, DeleteFeedbackModal } from "@/app/components/Modals";
import { useState, useEffect } from "react";

import { getRecipe } from "@/queries/apiQueries";
import Loading from "../../Loading";
/**
 * Type definition for a recipe.
 * A recipe has an id, ingredients, main_image, name, prep_time, procedure, servings, and user_id.
 * The id, prep_time, servings, and user_id are numbers.
 * The ingredients, main_image, name, and procedure are strings.
 */
type Recipe = {
  id: number;
  ingredients: string;
  main_image: string;
  name: string;
  prep_time: number;
  procedure: string;
  servings: number;
  user_id: number;
};
/**
 * This function component represents a page where a recipe is displayed.
 * It uses the `useState` hook to manage state for the delete confirmation, feedback form, recipe data, and loading state.
 * It uses the `useEffect` hook to fetch the recipe data when the component mounts.
 * The recipe data is fetched using the `getRecipe` function with the slug from the params.
 * If the fetch is successful, it sets the recipe data and sets loading to false.
 * If the fetch fails, it logs the error to the console.
 * It also finds the user who created the recipe and gets the role of the current user from local storage.
 *
 * @param params - The parameters for the page. Expected to contain a slug for the recipe.
 */
function Page({ params }: { params: { slug: string } }) {
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [feedBackIsOpen, setFeedBackIsOpen] = useState(false);
  const [datapi, setDatapi] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRecipe(params.slug);
        setDatapi(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const user = data.users.find((user) => user.id === datapi?.user_id);
  let role = null;
  if (typeof window !== "undefined") {
    role = localStorage.getItem("user");
  }
  return (
    <>
      <DeleteModal
        open={deleteIsOpen}
        setIsOpen={setDeleteIsOpen}
        setDeleteIsOpen={setFeedBackIsOpen}
        name={datapi?.name}
        id={datapi?.id}
      />
      <DeleteFeedbackModal
        open={feedBackIsOpen}
        setIsOpen={setFeedBackIsOpen}
        name={datapi?.name}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="h-full w-full ">
          <div className="relative flex h-[12.5rem] w-full justify-center transition-all duration-300 ease-in-out md:h-[18.75rem] xl:h-[32rem] ">
            <div className=" absolute h-full w-full  bg-gradient-to-t from-black from-10% to-transparent"></div>
            <div className="container absolute mx-auto flex h-full w-full flex-col justify-between p-5 text-light-0 transition-all duration-300 ease-in-out md:px-24 md:pb-10 md:pt-16">
              <div className="flex items-center justify-between">
                <Link
                  href={"/"}
                  className="flex items-center gap-3 font-lexend text-sm font-semibold transition-all duration-300 ease-in-out md:text-2xl"
                >
                  <Image
                    src={`/arrow-left.svg`}
                    width={32}
                    height={36}
                    alt={`arrow-left`}
                    loading="lazy"
                    className="h-4 w-[0.875rem] md:h-9 md:w-8"
                  />
                  <div>Back to Feed</div>
                </Link>
                {role === "admin" ? (
                  <div className="flex items-center md:hidden">
                    <div className="flex gap-3 font-lexend text-base">
                      <Link
                        href={`/recipe/edit/${params.slug}`}
                        className="flex h-[2.375rem] w-[2.375rem] items-center justify-between rounded-full border-[0.0625rem] border-light-0 p-[0.625rem] text-light-0"
                      >
                        <Image
                          src={`/pen.svg`}
                          width={16}
                          height={16}
                          alt={`pen`}
                          loading="lazy"
                        />
                      </Link>
                      <button
                        onClick={() => setDeleteIsOpen(true)}
                        className="flex h-[2.375rem] w-[2.375rem] items-center justify-between rounded-full border-[0.0625rem] border-red-delete p-[0.625rem] text-red-delete"
                      >
                        <Image
                          src={`/trash.svg`}
                          width={16}
                          height={16}
                          alt={`trash`}
                          loading="lazy"
                        />
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className=" flex flex-col gap-4 ">
                <div className="flex flex-col ">
                  <div className="font-payton text-2xl transition-all duration-300 ease-in-out md:text-[4rem] md:leading-tight">
                    {datapi?.name}
                  </div>
                  <div className="font-lexend text-xs transition-all duration-300 ease-in-out md:text-base">
                    by {user?.username}
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div className="flex gap-10 font-lexend text-xs text-secondary transition-all duration-300 ease-in-out md:text-base">
                    <div className="flex items-center gap-2">
                      <Image
                        src={`/utensils.svg`}
                        width={14}
                        height={16}
                        alt={`utensils`}
                        loading="lazy"
                      />
                      <div> {datapi?.servings} Servings</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src={`/stopwatch.svg`}
                        width={14}
                        height={16}
                        alt={`stopwatch`}
                        loading="lazy"
                      />
                      <div>{datapi?.prep_time} Minutes</div>
                    </div>
                  </div>
                  {role === "admin" ? (
                    <div className="hidden gap-5 font-lexend text-base md:flex">
                      <Link
                        href={`/recipe/edit/${params.slug}`}
                        className="flex h-[2.375rem] w-[6.625rem] items-center justify-between rounded-full border-[0.0625rem] border-light-0 p-[0.625rem] text-light-0"
                      >
                        <div>Edit</div>
                        <Image
                          src={`/pen.svg`}
                          width={16}
                          height={16}
                          alt={`pen`}
                          loading="lazy"
                        />
                      </Link>
                      <button
                        onClick={() => setDeleteIsOpen(true)}
                        className="flex h-[2.375rem] w-[6.625rem] items-center justify-between rounded-full border-[0.0625rem] border-red-delete p-[0.625rem] text-red-delete"
                      >
                        <div>Delete</div>
                        <Image
                          src={`/trash.svg`}
                          width={16}
                          height={16}
                          alt={`trash`}
                          loading="lazy"
                        />
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="w-full">
              <Image
                src={`/${datapi?.main_image}`}
                width={325}
                height={150}
                alt={`${datapi?.name}.image`}
                loading="lazy"
                className="h-[12.5rem] w-full object-cover transition-all duration-300 ease-in-out md:h-[18.75rem] xl:h-[32rem]"
              />
            </div>
          </div>
          <div className="container mx-auto flex h-full w-full flex-col gap-5 overflow-hidden p-4 transition-all duration-300 ease-in-out md:h-screen md:flex-row md:gap-14 md:px-24 md:pt-[6.25rem]">
            <div className="flex h-full w-full flex-col gap-5 transition-all duration-300 ease-in-out md:w-1/3">
              <div className="font-payton text-xl text-primary transition-all  duration-300 ease-in-out md:text-[2rem]">
                Ingredients
              </div>
              <div>
                <div
                  className="ingredients list-disc font-lexend"
                  dangerouslySetInnerHTML={{
                    __html: datapi?.ingredients ?? "",
                  }}
                />
              </div>
            </div>
            <div className="procedures flex h-full w-full flex-col gap-5 transition-all duration-300 ease-in-out  md:w-2/3 md:overflow-auto md:scroll-smooth">
              <div className="font-payton text-xl text-primary transition-all duration-300 ease-in-out md:text-[2rem]">
                Procedures
              </div>
              <div>
                <div
                  className="ingredients font-lexend "
                  dangerouslySetInnerHTML={{ __html: datapi?.procedure ?? "" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
