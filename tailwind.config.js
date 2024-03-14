/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#05337e",
        primary: "#f7faff",
        yello: "#fac451",
        main: "rgb(30,41,59)",
      },
    },
  },
  plugins: [],
}

