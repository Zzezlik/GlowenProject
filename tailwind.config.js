module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundColor: {"sec2Color": "#3F3F3F"},
      backgroundImage: { "search": "./src/assets/header/search.png" },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },

  },
  plugins: [],
};
