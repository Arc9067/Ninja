/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#242632",
        secondary: "#FFD32E",
        tertiary: "#353843",
      },
      fontFamily: {
        primary: ["THE AMAZING SPIDER-MAN", "sans-serif"],
      },
    },
  },
  plugins: [],
};
