/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: { blob: "blob 7s infinite" },
      colors: {
        "primary-black": "#19181d",
        "secondary-black": "#2d2c2c",
        "primary-purple": "#b4acc1",
        "secondary-purple": "#878291",
        "primary-sand": "#d3c3c0",
        "secondary-sand": "#c7b4b0",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(15px, -25px) scale(1.1)" },
          "66%": { transform: "translate(-10px, 10px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
