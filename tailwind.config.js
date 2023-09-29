/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        d434fe: "#D434FE",
      },
      rotate: {
        70: "-70deg",
      },
      fontSize: {
        xxx: "0.57rem",
        xxs: "0.25rem",
        xxm: "0.4rem",
      },
      screens: {
        xs: "425px",
        s: "375px",
      },
      width: {
        30: "7.5rem",
        116: "30rem",
        146: "36rem",
        152: "42rem",
        164: "52rem",
      },
      height: { 152: "42rem" },
      spacing: {
        104: "29rem",
        22: "5.4rem",
      },
      colors: {
        bgColor: "#160f2a",
      },
    },
  },
  plugins: [],
};
