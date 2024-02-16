/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cindypink: {
          950: "rgb(247	206	205)",
        },
      },
      fontFamily: {
        body: ["Montserrat"],
      },
      keyframes: {
        fade: {
          "0%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        wave: "fade 1s ease-in 1",
      },
    },
    plugins: [],
  },
  plugins: [],
};
