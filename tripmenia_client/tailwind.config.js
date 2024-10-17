/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: 'rgb(148, 43, 218)',  // Adding custom purple color
      },
    },
  },
  plugins: [],
};
