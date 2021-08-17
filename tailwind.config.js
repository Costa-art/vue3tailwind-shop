module.exports = {
  mode: 'jit',

  purge: ["./public/index.html", "./src/**/*.{js,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      body: ["Arial", "Helvetica", "sans-serif"],
      nova: ["Montserrat", "Helvetica", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],                         
};
