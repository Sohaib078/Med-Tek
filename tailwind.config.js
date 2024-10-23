/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B5E8",
        Secondary: "#067Ac5",
        css: "#264DE4",
      },
    },
  },
  plugins: [],
};
