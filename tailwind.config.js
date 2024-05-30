/** @type {import('tailwindcss').Config} */
defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts,scss}", "./src/app/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-darker": "var(--color-primary-darker)",
        secondary: "var(--color-secondary)",
        footer: "#1B1E22",
      },
      ring,
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
