import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // ≥992px ≥576px
        "2xl": { max: "1535px" },
        // => @media (max-width: 15px) { ... }

        xl: { max: "1280px" },
        // => @media (max-width: 1280px) { ... }

        lg: { max: "1024px" },
        // => @media (max-width: 1024px) { ... }
        // => @media (max-width: 992px) { ... }

        md: { max: "768px" },
        // => @media (max-width: 768px) { ... }

        sm: { max: "640px" },
        // => @media (max-width: 640px) { ... }

        // => @media (max-width: 540px) { ... }
        // => @media (max-width: 420px) { ... }
        // => @media (max-width: 375px) { ... }
        // => @media (max-width: 360px) { ... }
        // => @media (max-width: 320px) { ... }
        // => @media (max-width: 280px) { ... }
      },
      fontFamily: {
        primary: ["inter"],
        inter: ["inter"],
      },
      colors: {
        primary: "#000",
        secondary: "#fff",
        blue: {
          200: "#C3E1F4",
          300: "#8ABFE1",
          400: "#06AEC5",
          DEFAULT: "#117DC1",
          600: "#0B507B",
          700: "#0E3248",
        },
        black: {
          100: "#B1B5C3",
          200: "#23262F",
          300: "#141416",
          400: "#18181B",
          500: "#353945",
          DEFAULT: "#000",
          600: "#0E3248",
        },

        gray: {
          200: "#F4F5F6",
          300: "#E6E8EC",
          400: "#B1B5C3",
          500: "#D9D9D9",
          DEFAULT: "#777E90",
          600: "#CCCCCC",
          700: "#706F6F",
        },
        white: {
          100: "#FCFCFD",
          200: "#F3F6F9",
          400: "#F9F9FB",
          DEFAULT: " #FFFFFF",
        },
        green: {
          300: "#09A66D",
          400: "#00C48C",
        },
      },
      fontSize: {
        body1: ["24px", "36px"],
        bodySmall: ["14px", "24px"],
      },

      opacity: {
        15: ".15",
      },
    },
  },
  plugins: [],
};
export default config;
