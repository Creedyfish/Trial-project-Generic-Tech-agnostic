import React from "react";
import Link from "next/link";
import FoodCard from "./FoodCard";

interface Recipe {
  name: string;
  main_image: string;
  user_id: number;
}

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
        <>
          <Link
            href={`${
              active === "owner" ? "/recipes" : ""
            }/${recipe.name.replace(/\s/g, "-")}`}
            key={key}
            className="flex justify-center items-center group"
          >
            <FoodCard name={recipe.name} image={recipe.main_image} />
          </Link>
        </>
      ))}
    </>
  );
}

export default CardList;
