import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F1E6",
        parchment: "#EFE7D8",
        mist: "#DCE8E6",
        sage: "#7F998A",
        sageDeep: "#647E70",
        clay: "#C3876E",
        ink: "#303733",
        stone: "#747169"
      },
      boxShadow: {
        soft: "0 22px 55px rgba(48, 55, 51, 0.10)"
      },
      fontFamily: {
        sans: ["Avenir Next", "Inter", "Helvetica Neue", "Arial", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
