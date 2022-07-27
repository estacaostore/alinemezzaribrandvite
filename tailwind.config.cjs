/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.tsx"],
  darkMode: false, //or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "1fr max-content",
      },
    },
    fontFamily: {
      sans: "Oswald, sans-serif",
    },
  },
  variants: {
    extend: {
      display: ["group-focus"],
      opacity: ["group-focus"],
      inset: ["group-focus"],
    },
  },
  plugins: [],
};
