// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: "#102059",
      },
    },
  },
  variants: {},
  plugins: [],
};
