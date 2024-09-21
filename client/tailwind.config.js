/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.vue",
    "./src/**/*.vue",
    "./src/**/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
