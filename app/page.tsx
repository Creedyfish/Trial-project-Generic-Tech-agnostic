"use client";
import Image from "next/image";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Header from "./components/Header";
import { useState } from "react";
import FoodCard from "./components/FoodCard";
import data from "@/data.json";

export default function Home() {
  const [active, setActive] = useState("owner");

  return (
    <main className="w-full h-full md:px-24 p-4 mx-auto container ">
      <ThemeSwitcher />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className="font-payton text-dark-0 text-xl dark:text-light-0">
            Hi, Bada Lee
          </div>
          <div className="text-primary font-semibold font-lexend text-sm">
            This is your Recipe Collection
          </div>
        </div>
        <div className="flex font-lexend">
          <button
            className={`px-5 py-3 transition-all duration-300 ease-in-out ${
              active === "owner" ? "bg-primary" : "bg-light-0 dark:bg-dark-0"
            }`}
            onClick={() => setActive("owner")}
          >
            Own Recipes
          </button>
          <button
            className={`px-5 py-3 transition-all duration-300 ease-in-out ${
              active === "other" ? "bg-primary" : "bg-light-0 dark:bg-dark-0"
            } `}
            onClick={() => setActive("other")}
          >
            Other&apos;s Recipes
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data.recipes.map((recipe, key) => (
            <>
              <div key={key} className="flex justify-center items-center">
                <FoodCard name={recipe.name} image={recipe.main_image} />
              </div>
              <div key={key} className="flex justify-center items-center">
                <FoodCard name={recipe.name} image={recipe.main_image} />
              </div>
            </>
          ))}
        </div>
      </div>
    </main>
  );
}
