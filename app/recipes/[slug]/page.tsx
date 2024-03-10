"use client";
import React from "react";
import data from "@/data.json";
import Image from "next/image";
import Link from "next/link";
import { DeleteModal, DeleteFeedbackModal } from "@/app/components/Modals";
import { useState } from "react";

function page({ params }: { params: { slug: string } }) {
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [feedBackIsOpen, setFeedBackIsOpen] = useState(false);

  const recipe = data.recipes.find(
    (recipe) => recipe.name === params.slug.replace(/-/g, " ")
  );

  return (
    <>
      <DeleteModal
        open={deleteIsOpen}
        setIsOpen={setDeleteIsOpen}
        setDeleteIsOpen={setFeedBackIsOpen}
        name={recipe?.name}
      />
      <DeleteFeedbackModal
        open={feedBackIsOpen}
        setIsOpen={setFeedBackIsOpen}
        name={recipe?.name}
      />
      <div className="w-full h-full ">
        <div className="relative w-full xl:h-[32rem] md:h-[18.75rem] h-[12.5rem] flex justify-center transition-all duration-300 ease-in-out ">
          <div className=" bg-gradient-to-t from-black from-10%  to-transparent w-full h-full absolute"></div>
          <div className="flex flex-col text-light-0 justify-between w-full h-full p-5 md:px-24 md:pb-10 md:pt-16 mx-auto container transition-all duration-300 ease-in-out absolute">
            <div className="flex justify-between items-center">
              <Link
                href={"/"}
                className="flex items-center gap-3 font-lexend font-semibold text-sm md:text-2xl transition-all duration-300 ease-in-out"
              >
                <Image
                  src={`/arrow-left.svg`}
                  width={32}
                  height={36}
                  alt={`arrow-left`}
                  loading="lazy"
                  className="w-[0.875rem] h-4 md:w-8 md:h-9"
                />
                <div>Back to Feed</div>
              </Link>
              <div className="flex md:hidden items-center">
                <div className="gap-3 flex font-lexend text-base">
                  <Link
                    href={`/recipe/edit/${params.slug}`}
                    className="flex justify-between rounded-full p-[0.625rem] items-center w-[2.375rem] h-[2.375rem] border-[0.0625rem] border-light-0 text-light-0"
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
                    className="flex justify-between rounded-full p-[0.625rem] items-center w-[2.375rem] h-[2.375rem] border-[0.0625rem] border-red-delete text-red-delete"
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
              <div className="font-payton text-2xl md:text-[4rem] transition-all duration-300 ease-in-out">
                {recipe?.name}
              </div>
              <div className="flex justify-between items-end">
                <div className="flex gap-10 text-secondary font-lexend text-xs md:text-base transition-all duration-300 ease-in-out">
                  <div className="flex items-center gap-2">
                    <Image
                      src={`/utensils.svg`}
                      width={14}
                      height={16}
                      alt={`utensils`}
                      loading="lazy"
                    />
                    <div> {recipe?.servings} Servings</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src={`/stopwatch.svg`}
                      width={14}
                      height={16}
                      alt={`stopwatch`}
                      loading="lazy"
                    />
                    <div>{recipe?.prep_time} Minutes</div>
                  </div>
                </div>
                <div className="gap-5 hidden md:flex font-lexend text-base">
                  <Link
                    href={`/recipe/edit/${params.slug}`}
                    className="flex justify-between rounded-full p-[0.625rem] items-center w-[6.625rem] h-[2.375rem] border-[0.0625rem] border-light-0 text-light-0"
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
                    className="flex justify-between rounded-full p-[0.625rem] items-center w-[6.625rem] h-[2.375rem] border-[0.0625rem] border-red-delete text-red-delete"
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
              src={`/${recipe?.main_image}`}
              width={325}
              height={150}
              alt={`${recipe?.name}.image`}
              loading="lazy"
              className="w-full xl:h-[32rem] md:h-[18.75rem] h-[12.5rem] object-cover transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 md:gap-14 md:flex-row w-full h-full md:h-screen overflow-hidden p-4 md:px-24 md:pt-[6.25rem] mx-auto container transition-all duration-300 ease-in-out">
          <div className="h-full flex gap-5 flex-col md:w-1/3 w-full transition-all duration-300 ease-in-out">
            <div className="font-payton text-xl md:text-[2rem] text-primary  transition-all duration-300 ease-in-out">
              Ingredients
            </div>
            <div>
              <div
                className="ingredients font-lexend list-disc"
                dangerouslySetInnerHTML={{ __html: recipe?.ingredients ?? "" }}
              />
            </div>
          </div>
          <div className="procedures flex flex-col h-full md:w-2/3 gap-5 w-full md:overflow-auto md:scroll-smooth  transition-all duration-300 ease-in-out">
            <div className="font-payton text-xl md:text-[2rem] text-primary transition-all duration-300 ease-in-out">
              Procedures
            </div>
            <div>
              <div
                className="ingredients font-lexend "
                dangerouslySetInnerHTML={{ __html: recipe?.procedure ?? "" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
