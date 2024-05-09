/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lato Slab', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'], // Define a custom font family for Lato with specific weights
      },
      fontWeight: {
        'serif-light': 100,
        'serif-normal': 300,
        'serif-regular': 400,
        'lato-light': 100,
        'lato-normal': 300,
        'lato-regular': 400,
      },
      blue: {
        DEFAULT: "#FCE300",
        200: "#3B82F6",
        300: "#1D4ED8",
      },
    },
  },
  variants: {},
  plugins: [],
};
