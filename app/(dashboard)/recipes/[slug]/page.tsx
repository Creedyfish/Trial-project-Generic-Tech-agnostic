"use client";
import React from "react";
import data from "@/data.json";
import Image from "next/image";
import Link from "next/link";
import { DeleteModal, DeleteFeedbackModal } from "@/app/components/Modals";
import { useState, useEffect } from "react";
import { getRecipe } from "@/queries/apiQueries";
import Loading from "@/app/Loading";
/**
 * Type definition for a Recipe.
 * @typedef {Object} Recipe
 * @property {number} id - The unique identifier for the recipe.
 * @property {string} ingredients - The ingredients required for the recipe.
 * @property {string} main_image - The main image URL for the recipe.
 * @property {string} name - The name of the recipe.
 * @property {number} prep_time - The preparation time for the recipe in minutes.
 * @property {string} procedure - The procedure to prepare the recipe.
 * @property {number} servings - The number of servings the recipe makes.
 * @property {number} user_id - The unique identifier of the user who created the recipe.
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
 * Page component that displays a specific recipe.
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.params - The parameters passed to the component.
 * @param {string} props.params.slug - The slug of the recipe to display.
 */
function Page({ params }: { params: { slug: string } }) {
  // State for managing the visibility of the delete modal.
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);

  // State for managing the visibility of the feedback modal.
  const [feedBackIsOpen, setFeedBackIsOpen] = useState(false);

  // State for storing the recipe data.
  const [datapi, setDatapi] = useState<Recipe | null>(null);

  // State for managing the loading state of the component.
  const [isLoading, setIsLoading] = useState(true);

  // Effect for fetching the recipe data on component mount.
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
  // Handler for opening the delete modal.
  const deleteHandler = async () => {
    setDeleteIsOpen(true);
  };

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
                      onClick={() => deleteHandler}
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
              </div>
              <div className=" flex flex-col gap-4 ">
                <div className="font-payton text-2xl transition-all duration-300 ease-in-out md:text-[4rem] md:leading-[3rem]">
                  {datapi?.name}
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
                      onClick={() => deleteHandler()}
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
