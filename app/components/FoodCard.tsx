import React from "react";
import data from "@/data.json";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
}

function FoodCard({ name, image }: Props) {
  // const ingredientsHtml = data.recipes[0].procedure;
  {
    /* <div
        className="ingredients font-lexend list-disc"
        dangerouslySetInnerHTML={{ __html: ingredientsHtml }}
      /> */
  }
  return (
    <div className="flex w-[325px] flex-col justify-center items-center gap-2">
      <Image
        src={`/${image}`}
        width={325}
        height={150}
        alt={`${name}.image`}
        className="w-[325px] h-[150px] object-cover rounded-md"
      />
      <div className="font-lexend w-full font-semibold text-sm md:text-xl items-start border-l-4 border-secondary">
        <div className="px-2">{name}</div>
      </div>
    </div>
  );
}

export default FoodCard;
