import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        brand: "#f94564",
      },
      spacing: {
        "8xl": "92rem",
      },
      listStyleType: {
        checked: '"\\2713"',
      },
    },
  },
  plugins: [typography],
};
