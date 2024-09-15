import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" }, // At the start and end, no rotation
          "50%": { transform: "rotate(15deg)" }, // Rotate 15 degrees at the midpoint
        },
        "letter-color": {
          "0%, 100%": { color: "#FF5733" },
          "25%": { color: "#33FF57" },
          "50%": { color: "#3357FF" },
          "75%": { color: "#FF33A6" },
        },
      },
      animation: {
        "letter-color": "letter-color 4s ease-in-out infinite",
        wave: "wave 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
