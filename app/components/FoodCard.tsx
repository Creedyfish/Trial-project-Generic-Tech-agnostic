/**
 * This module exports a FoodCard component that displays a food item.
 *
 * @module FoodCard
 */

// Importing necessary libraries
import React from "react";
import Image from "next/image";

// Defining the Props interface
interface Props {
  name: string; // Name of the food item
  image: string; // Path to the image of the food item
}

/**
 * FoodCard component.
 *
 * @function
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name of the food item.
 * @param {string} props.image - The path to the image of the food item.
 * @returns {JSX.Element} - Returns a div element with a specific style, containing an Image component and a div for the name.
 *
 * The component doesn't have any internal state or side effects.
 * The Image source and alt text are derived from the image and name props respectively.
 * The name prop is displayed in a div.
 */
function FoodCard({ name, image }: Props) {
  // The component doesn't have any internal state or side effects, so the body of the function is empty

  // The component returns a div element with a specific style, containing an Image component and a div for the name
  return (
    <div className="flex w-[20.3125rem] flex-col items-center justify-center gap-2">
      <div className="overflow-hidden">
        <Image
          src={`/${image}`} // Image source is derived from the image prop
          width={325}
          height={150}
          alt={`${name}.image`} // Alt text for the image is derived from the name prop
          loading="lazy" // Image loading is set to lazy to improve performance
          className="h-[9.5rem] w-[20.3125rem] rounded-md object-cover transition-all duration-300 ease-in-out group-hover:scale-110" // Various CSS classes for styling
        />
      </div>
      <div className="w-full items-start border-l-4 border-secondary font-lexend text-sm font-semibold md:text-xl">
        {/* The name prop is displayed here */}
        <div className="px-2">{name}</div>
      </div>
    </div>
  );
}

// The FoodCard component is exported for use in other parts of the application
export default FoodCard;
