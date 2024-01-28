/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        xl: "1280px",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        "dancing-script": ["Dancing Script", "serif"],
      },
      colors: {
        beige: {
          light: "#EECEB0",
          lessLight: "#ddb996",
          dark: "#A96449",
          lightest: "#FDFDFD",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
