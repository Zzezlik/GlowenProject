module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: { "search": "./src/assets/header/search.png" },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },

  },
  plugins: [],
};
