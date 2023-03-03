/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#DFE6E9",
        primary: "#0AC3C3",
      },
    },
    fontFamily: {
      gloock: ["Gloock", "serif"],
      heebo: ["Heebo", "sans-serif"],
    },
  },
  plugins: [],
};

