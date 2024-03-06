import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#CB4036',
        'secondary':'#FFC327',
        'dark-1':'#282828',
        'dark-0':"#1E1E1E"
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
