/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: "Inter, sans-serif",
      },
      colors: {
        title: "#86868b",
        base: "#101010",
        start: "#FFFFFF",
        middle: "#D3D3D3",
        end: "#999999",
        button: "#0071E3",
        magnesium_red: "#931D16",
        magnesium_black: "#151515",
        magnesium_white: "#ADBBC6",
        magnesium_blue: "#34333D",
      },
      // colors: {
      //   title: "#86868b",
      //   base: "#101010",
      // },
    },
  },
  plugins: [],
};
