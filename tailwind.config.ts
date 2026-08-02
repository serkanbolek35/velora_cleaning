import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0B0B0B",
          light: "#141414",
          soft: "#1C1C1C",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8CE7A",
          dark: "#A8842A",
          muted: "#C9A94E",
        },
        ivory: "#F7F5F0",
        graystone: "#8B8B87",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A94E 0%, #F1DE9A 45%, #D4AF37 55%, #A8842A 100%)",
        "gold-radial": "radial-gradient(circle at center, #D4AF37 0%, #0B0B0B 70%)",
        "noise": "url('/images/noise.png')",
      },
      boxShadow: {
        gold: "0 0 30px -5px rgba(212,175,55,0.35)",
        "gold-lg": "0 20px 60px -15px rgba(212,175,55,0.25)",
        card: "0 10px 40px -10px rgba(0,0,0,0.5)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.25rem", lg: "2rem" },
      },
    },
  },
  plugins: [],
};
export default config;
