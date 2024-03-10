// Importing necessary libraries and data
import React from "react";
import Image from "next/image";

// Defining the type of props that the FoodCard component will receive
interface Props {
  name: string; // Name of the food item
  image: string; // Path to the image of the food item
}

// FoodCard component
function FoodCard({ name, image }: Props) {
  // The component doesn't have any internal state or side effects, so the body of the function is empty

  // The component returns a div element with a specific style, containing an Image component and a div for the name
  return (
    <div className="flex w-[20.3125rem]  flex-col justify-center items-center gap-2">
      <div className="overflow-hidden">
        <Image
          src={`/${image}`} // Image source is derived from the image prop
          width={325}
          height={150}
          alt={`${name}.image`} // Alt text for the image is derived from the name prop
          loading="lazy" // Image loading is set to lazy to improve performance
          className="w-[20.3125rem] h-[9.5rem] object-cover group-hover:scale-110 rounded-md transition-all duration-300 ease-in-out" // Various CSS classes for styling
        />
      </div>
      <div className="font-lexend w-full font-semibold text-sm md:text-xl items-start border-l-4 border-secondary">
        <div className="px-2">{name}</div> // The name prop is displayed here
      </div>
    </div>
  );
}

// The FoodCard component is exported for use in other parts of the application
export default FoodCard;
