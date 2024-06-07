module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-image": "url(../imgs/bg.jpeg)",
        "bg-nav":
          "linear-gradient(157.20deg, rgba(6, 11, 38, 0.94) 31.883%,rgba(26, 31, 55, 0) 100%);",
        divider:
          "linear-gradient(to right, transparent, #E0E1E2 , transparent)",
      },
      colors: {
        "bg-main": "#060B26",
        "bg-nav--active": "rgb(26, 31, 55)",
        "nav-icon": "rgb(0, 117, 255)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
