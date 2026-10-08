import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#171814", grid: "#33362a", lime: "#d8f47f", dim: "#a9b96a" },
      fontFamily: { sans: ['"Avenir Next"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
