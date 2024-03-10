"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllRecipesData, signUp } from "@/queries/apiQueries";
import { redirect, useRouter } from "next/navigation";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";
import Loading from "../Loading";
import { Redirect } from "next";
/**
 * Interface for a Recipe.
 * @interface Recipe
 * @property {string} name - The name of the recipe.
 * @property {string} main_image - The main image URL for the recipe.
 * @property {number} user_id - The unique identifier of the user who created the recipe.
 */
interface Recipe {
  name: string;
  main_image: string;
  user_id: number;
}
/**
 * The Home component that displays a list of recipes.
 * It fetches all recipes data and filters them based on the active state.
 * It also handles pagination of the recipe cards.
 */
export default function Home() {
  // Router instance for navigation.
  const router = useRouter();
  // State for managing the active filter.
  const [active, setActive] = useState("owner");
  // State for managing the current page of the pagination.
  const [currentPage, setCurrentPage] = useState(1);
  // State for managing the number of cards per page in the pagination.
  const [cardsPerPage, setCardsPerPage] = useState(16);
  // State for storing the fetched recipes data.
  const [datapi, setDatapi] = useState<Recipe[] | undefined>();
  // State for storing the filtered recipes data.
  const [filteredData, setFilteredData] = useState<Recipe[] | undefined>();
  // State for managing the loading state of the component.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if 'redirected' key exists in localStorage
    if (typeof window !== "undefined" && !localStorage.getItem("user")) {
      // If 'redirected' key doesn't exist, redirect to '/login'
      router.push("/login");
    }
  }, []);

  // Effect for fetching the recipes data on component mount.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllRecipesData();
        setDatapi(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  // Effect for filtering the recipes data when the datapi or active state changes.
  useEffect(() => {
    const filterData = async () => {
      try {
        if (active === "owner") {
          const data = await datapi?.filter((recipe) => recipe.user_id === 1);
          setFilteredData(data);
        } else {
          const data = await datapi?.filter((recipe) => recipe.user_id !== 1);
          setFilteredData(data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    filterData();
  }, [datapi, active]);
  // Calculating the indices for slicing the filteredData array for pagination.
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  // The current page's cards data.
  const currentCards = filteredData?.slice(firstCardIndex, lastCardIndex);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="absolute hidden h-full top-0 z-0 md:visible md:flex w-full justify-center items-start transition-all duration-300 ease-in-out">
            <div className="max-w-[1920px] flex w-full justify-end">
              <Image
                src={"/knife-and-spatchula.png"}
                width={500}
                height={500}
                alt="knife-and-spatchula"
                className=""
              />
            </div>
          </div>
          <main className="w-full h-full md:px-24 md:pt-24 p-4 mx-auto container relative transition-all duration-300 ease-in-out">
            <div className="flex flex-col gap-8 w-full h-full">
              <div className="flex flex-col gap-2 md:gap-5 transition-all duration-300 ease-in-out">
                <div className="font-payton text-dark-0 text-xl md:text-[2rem] dark:text-light-0 transition-all duration-300 ease-in-out">
                  Hi, Bada Lee
                </div>
                <div className="text-primary font-semibold font-lexend text-sm md:text-xl transition-all duration-300 ease-in-out">
                  This is your Recipe Collection
                </div>
              </div>
              <div className="flex justify-center md:justify-between items-center font-lexend text-light-0 transition-all duration-300 ease-in-out">
                <div>
                  <button
                    className={`px-5 py-3 transition-all duration-300 ease-in-out ${
                      active === "owner"
                        ? "bg-primary"
                        : "bg-light-0 dark:bg-dark-0 text-gray-cooky"
                    }`}
                    onClick={() => {
                      setActive("owner");
                    }}
                  >
                    Own Recipes
                  </button>
                  <button
                    className={`px-5 py-3 transition-all duration-300 ease-in-out ${
                      active === "other"
                        ? "bg-primary"
                        : "bg-light-0 dark:bg-dark-0 text-gray-cooky"
                    } `}
                    onClick={() => {
                      setActive("other");
                    }}
                  >
                    Other&apos;s Recipes
                  </button>
                </div>
                <button
                  onClick={() => router.push("/recipe/create")}
                  className={`${
                    active === "other"
                      ? "hidden"
                      : "md:flex transition-all duration-300 ease-in-out"
                  } hidden px-5 py-3 bg-primary rounded-full active:scale-90 hover:ring-2 dark:hover:ring-light-0 hover:ring-secondary`}
                >
                  New Recipe
                </button>
              </div>
              <div className="items-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-y-10 md:gap-x-5  transition-all duration-300 ease-in-out">
                <CardList data={currentCards} active={active} />

                <div className="flex justify-center items-center md:hidden">
                  <div className="flex w-[20.3125rem] h-[9.5rem]  flex-col justify-center items-center gap-2">
                    <div className="flex md:hidden h-full w-full justify-center items-center font-lexend text-xs text-primary">
                      <div>That&apos;s all we have for now</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex h-full w-full justify-end items-center">
                <Pagination
                  itemsPerPage={cardsPerPage}
                  totalItems={filteredData?.length}
                  paginate={setCurrentPage}
                />
              </div>
            </div>

            <div className="fixed flex flex-col md:hidden gap-4 right-7 bottom-6">
              <button
                className="w-11 h-11 rounded-full bg-primary flex justify-center items-center active:scale-90 active:ring-2 dark:active:ring-light-0 active:ring-secondary transition-all duration-300 ease-out"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Image
                  src={"/arrow-up.svg"}
                  width={15.7}
                  height={18.29}
                  alt={`arrow-up`}
                  loading="lazy"
                />
              </button>
              <Link
                href={"/recipe/create"}
                className="w-11 h-11 rounded-full bg-primary flex justify-center items-center active:scale-90 active:ring-2 dark:active:ring-light-0 active:ring-secondary transition-all duration-300 ease-out"
              >
                <Image
                  src={"/plus.svg"}
                  width={15.7}
                  height={18.29}
                  alt={`plus`}
                  loading="lazy"
                />
              </Link>
            </div>
          </main>
        </>
      )}
    </>
  );
}
