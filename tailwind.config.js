const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#2D83F5",
          500: "#2D83F5",
        },
        yellow: {
          DEFAULT: "#FFC24A",
          500: "#FFC24A",
        },
        red: {
          DEFAULT: "#FF5836",
          500: "#FF5836",
        },
        green: {
          DEFAULT: "#6EC770",
          500: "#6EC770",
        },
        sky: {
          DEFAULT: "#4DA29A",
          500: "#4DA29A",
        },
        slate: {
          DEFAULT: "#EBDED4",
          500: "#EBDED4",
        },
        dark: {
          DEFAULT: "#000000",
          500: "#000000",
        },
      },
    },
  },
  plugins: [],
});
