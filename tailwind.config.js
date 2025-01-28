/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "serif"],
      },
      colors: {
        darkBlue: "#144660",
        lightBlack: "#1d342e"
      },
    },
    keyframes: {
      move: {
        "50%": { transform: "translateY(-1rem)" }
      }
    },
    animation: {
      movingY: "move 3s linear infinite"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      },
    },
  },
  plugins: [],
};
