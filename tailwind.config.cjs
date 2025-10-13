/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Updated brand palette
        primary: "#132b37", // deep blue-green
        secondary: "#0f0802", // warm brown
        accent: "#bd782d", // orange accent
        button: "#efeee9", // light background/button
        ink: "#0f0802", // near-black
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { transform: "scale(1)", opacity: 0.5 },
          "50%": { transform: "scale(1.2)", opacity: 0 },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
