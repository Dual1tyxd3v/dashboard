module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        loader: "linear-gradient(135deg, #0075FF 47%, #fff 50%, #0075FF 53%)",
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
      colors: {
        "black-50%": 'rgba(0, 0, 0, 0.5)',
        "black-90%": 'rgba(0, 0, 0, 0.9)',
      },
      animation: {
        loader: "loader 2s infinite",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      spacing: {
        "1-important": "0.25rem !important",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
