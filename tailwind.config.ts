import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "nav-container":{
        center:true,
        padding:"2rem",
        margin:"100px",
        screens:{
          "2xl":"1400px",
          "3xl":"1840px"
        }
      },
      fontFamily: {
        'payton': ['var(--font-payton)'],
        'lexend': ['var(--font-lexend)'],
      },
      width: {
        'max-content': 'max-content',
      },
      backgroundImage: {
        'login-bg': "url('/login-image.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors:{
        'primary':'#CB4036',
        'secondary':'#FFC327',
        'light-0':"#FFFFFF",
        'gray-cooky':"#929292",
        'red-delete':"#FF1100",
        'red-error':"#FF9393",
        'bg-input':'#EFEFEF',
        'dark-1':'#282828',
        'dark-0':"#1E1E1E"
      }
    },
  },
  plugins: [],darkMode: "class",
};
export default config;
