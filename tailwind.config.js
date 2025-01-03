/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        red: "#FF0116",
      },
      fontFamily: {
        openSans: "OpenSans",
      },
      screens: {
        mb: { max: "756px" }, // Custom media query
      },
    },
  },
  plugins: [],
};
