/**
 * This module exports a CardList component that displays a list of recipes.
 *
 * @module CardList
 */

// Importing necessary modules and components
import React from "react";
import Link from "next/link";
import FoodCard from "./FoodCard";

// Defining the Recipe interface
interface Recipe {
  name: string;
  main_image: string;
  user_id: number;
}

/**
 * CardList component.
 *
 * @function
 * @param {Object} props - The properties passed to the component.
 * @param {Recipe[] | undefined} props.data - The array of recipes to display.
 * @param {string} props.active - The active state of the component.
 * @returns {JSX.Element} - Returns a list of FoodCard components wrapped in Link components.
 *
 * The component maps over the data array and creates a FoodCard component for each recipe.
 * The FoodCard component is wrapped in a Link component that points to the recipe's page.
 * The URL of the Link component depends on the active state of the CardList component.
 */
function CardList({
  data,
  active,
}: {
  data: Recipe[] | undefined;
  active: string;
}) {
  return (
    <>
      {data?.map((recipe: Recipe, key: number) => (
        <Link
          href={`${active === "owner" ? "/recipes" : ""}/${recipe.name.replace(
            /\s/g,
            "-",
          )}`}
          key={key}
          className="group flex items-center justify-center"
        >
          <FoodCard name={recipe.name} image={recipe.main_image} />
        </Link>
      ))}
    </>
  );
}

export default CardList;
