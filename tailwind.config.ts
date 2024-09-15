import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      keyframes: {
        "fade-in-out": {
          "0%, 100%": { backgroundColor: "black" }, // Start and end with black
          "50%": { backgroundColor: "#ebf8ff", color: "black" }, // Middle of animation with blue-50
        },
        "letter-color": {
          "0%, 100%": { color: "#FF5733" },
          "25%": { color: "#33FF57" },
          "50%": { color: "#3357FF" },
          "75%": { color: "#FF33A6" },
        },
      },
      animation: {
        "fade-in-out": "fade-in-out 3s ease-in-out infinite", // 3s duration, infinite loop
        "letter-color": "letter-color 4s ease-in-out infinite", // Define the animation
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
