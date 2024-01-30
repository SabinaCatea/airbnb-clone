/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC1262",
        secondary: "#1E6DDF",
      },
    },
  },
  plugins: [],
};
