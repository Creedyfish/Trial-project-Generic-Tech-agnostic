"use client";
/**
 * @file This module provides a ThemeProvider component for managing themes in a Next.js application.
 */

// Import the ThemeProvider from the next-themes package and rename it to avoid naming conflicts
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Import the type definition for the props of the ThemeProvider component from the next-themes package
import { type ThemeProviderProps } from "next-themes/dist/types";

/**
 * The ThemeProvider component wraps the application and provides theme management functionality.
 * It uses the ThemeProvider from the next-themes package under the hood.
 *
 * @param {ThemeProviderProps} props - The props that define the ThemeProvider component.
 * @param {ReactNode} props.children - The children components to be rendered within the ThemeProvider.
 * @returns {ReactElement} The ThemeProvider component that wraps the children components.
 */
const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

// Export the ThemeProvider component as the default export of this module
export default ThemeProvider;
