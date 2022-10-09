/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      content: {
        blank: "''",
      },

      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
        "1fr-auto": "1fr auto",
      },
      gridTemplateRows: {
        "auto-1fr": "auto 1fr",
        "1fr-auto": "1fr auto",
      },
      outlineWidth: {
        3: "3px",
      },
      outlineOffset: {
        "-1": "-1px",
        "-2": "-2px",
        "-3": "-3px",
        "-4": "-4px",
        "-8": "-8px",
      },
      colors: {
        "surface-050": "hsl(215 10% 95% / <alpha-value>)",
        "surface-100": "hsl(215 10% 90% / <alpha-value>) ",
        "surface-200": "hsl(215 10% 80% / <alpha-value>) ",
        "surface-300": "hsl(215 10% 63% / <alpha-value>) ",
        "surface-400": "hsl(215 10% 48% / <alpha-value>) ",
        "surface-500": "hsl(215 10% 35% / <alpha-value>) ",
        "surface-600": "hsl(215 10% 25% / <alpha-value>) ",
        "surface-700": "hsl(215 10% 18% / <alpha-value>) ",
        "surface-800": "hsl(215 10% 12% / <alpha-value>) ",
        "surface-900": "hsl(215 10% 10% / <alpha-value>) ",
        "surface-950": "hsl(215 10% 05% / <alpha-value>) ",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
