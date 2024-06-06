module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        "my-image": "url(../imgs/bg.jpeg)",
      },
      colors: {
        mainBg: "#060B26",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
