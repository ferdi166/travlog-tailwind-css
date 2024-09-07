/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.{html,js}"],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      fontFamily: {
        inter: "inter",
        Circular: "Circular STD",
      },
      colors: {
        ungu: "#5D50C6",
        pink: "#F85E9F",
        orange: "#FF5722",
        yellow: "#FACD49",
        gray: "#191825",
      },
      dropShadow: {
        "sm-shadow": [
          "0 0 0 0 rgba(0, 0, 0, 0.07)",
          "0 34px 75px 0 rgba(0, 0, 0, 0.07)",
          "0 137px 137px 0 rgba(0, 0, 0, 0.06)",
          "0 308px 185px 0 rgba(0, 0, 0, 0.04)",
          "0 548px 219px 0 rgba(0, 0, 0, 0.01)",
          "0 856px 240px 0 rgba(0, 0, 0, 0)",
        ],
        "lg-shadow": [
          "0 0 0 0 rgba(0, 0, 0, 0.1)",
          "0 5px 11px 0 rgba(0, 0, 0, 0.1)",
          "0 20px 20px 0 rgba(0, 0, 0, 0.09)",
          "0 45px 27px 0 rgba(0, 0, 0, 0.05)",
          "0 81px 32px 0 rgba(0, 0, 0, 0.01)",
          "0 126px 35px 0 rgba(0, 0, 0, 0)",
        ],
        "xl-shadow": [
          "0 0 0 0 rgba(0, 0, 0, 0.1)",
          "0 41px 89px 0 rgba(0, 0, 0, 0.1)",
        ],
      },
    },
  },
  plugins: [],
};
