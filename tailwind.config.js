/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PublicSans: ["Public Sans", "serif"],
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
