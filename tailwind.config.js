module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-image": "url(../imgs/bg.jpeg)",
        "bg-nav":
          "linear-gradient(157.20deg, rgba(6, 11, 38, 0.94) 31.883%,rgba(26, 31, 55, 0) 100%);",
        loader: "linear-gradient(135deg, #0075FF 47%, #fff 50%, #0075FF 53%)",
        divider:
          "linear-gradient(to right, transparent, #E0E1E2 , transparent)",
        "bg-block":
          " linear-gradient(175.70deg, rgba(6, 11, 40, 0.74) 12.226%,rgba(10, 14, 35, 0.71) 113.851%)",
        "mini-block":
          "linear-gradient(175.70deg, rgb(6, 12, 41) 14.588%,rgba(4, 12, 48, 0.5) 110.513%)",
      },
      backgroundSize: {
        "loader-size": "350% 100%",
      },
      keyframes: {
        loader: {
          "0%": {
            backgroundPositionX: "right",
          },
          "100%": {
            backgroundPositionX: "left",
          },
        },
      },
      animation: {
        loader: "loader 2s infinite",
      },
      colors: {
        "bg-main": "#060B26",
        "bg-nav--active": "rgb(26, 31, 55)",
        "nav-icon": "rgb(0, 117, 255)",
        "input-bg": "rgb(15, 21, 53)",
        "input-border": "rgba(226, 232, 240, 0.3)",
        "input-border--active": "rgb(44, 217, 255)",
        "gray-thin": "rgb(160, 174, 192)",
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
