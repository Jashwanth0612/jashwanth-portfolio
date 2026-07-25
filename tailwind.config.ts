import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F1E7CE",
        creamdeep: "#E9DBB8",
        parchment: "#FAF3E0",
        ink: "#2E2A20",
        inksoft: "#4A4436",
        oxblood: "#8C2F1E",
        oxblooddark: "#6E2417",
        bronze: "#A9793D",
        bronzelight: "#C99A56",
        verdigris: "#4B6B5D",
        stone: "#C9BC98",
        stoneline: "rgba(46,42,32,0.18)",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        decorative: ["var(--font-cinzel-decorative)", "serif"],
        body: ["var(--font-garamond)", "serif"],
        label: ["var(--font-cormorant-sc)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
