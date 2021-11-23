// tailwind.config.js
module.exports = {
  purge: {
    enabled: true,
    layers: ["components", "utilities"],
    content: ["./src/**/*.[tsx,html,ts,js]"]
  },
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
