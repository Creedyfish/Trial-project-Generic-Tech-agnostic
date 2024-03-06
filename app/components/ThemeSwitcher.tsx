"use client";
/**
 * @file This module provides a ThemeSwitcher component for switching themes in a Next.js application.
 */

// Import necessary hooks from React and next-themes package
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

/**
 * The ThemeSwitcher component provides a UI for switching between light and dark themes.
 * It uses the useTheme hook from the next-themes package to get and set the current theme.
 *
 * @returns {ReactElement} The ThemeSwitcher component with buttons to switch between light and dark themes.
 */
const ThemeSwitcher = () => {
  // State variable for checking if the component has mounted
  const [mounted, setMounted] = useState(false);

  // Use the useTheme hook to get the current theme and a function to set the theme
  const { theme, setTheme } = useTheme();

  // Use an effect to set the mounted state to true after the component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // If the component has not mounted, do not render anything
  if (!mounted) {
    return null;
  }

  // Render the current theme and buttons to switch to light or dark theme
  return (
    <div>
      The current theme is: {theme}
      <br />
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <br />
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
};

// Export the ThemeSwitcher component as the default export of this module
export default ThemeSwitcher;
