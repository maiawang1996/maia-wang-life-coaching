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
        ivory: "#F7F1E8",
        mist: "#DCE7E6",
        sage: "#8FA596",
        clay: "#C88F78",
        ink: "#2F3532",
        stone: "#7E7A73"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(47, 53, 50, 0.10)"
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
