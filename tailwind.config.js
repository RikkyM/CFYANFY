/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "serif"],
        meridies: ["Meridies Antiqua", "sans-serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
