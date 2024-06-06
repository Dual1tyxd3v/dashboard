module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-image": "url(../imgs/bg.jpeg)",
        "bg-nav":
          "linear-gradient(157.20deg, rgba(6, 11, 38, 0.94) 31.883%,rgba(26, 31, 55, 0) 100%);",
      },
      colors: {
        "bg-main": "#060B26",
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
