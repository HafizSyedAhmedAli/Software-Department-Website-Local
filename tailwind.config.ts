import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#e8edf5",
          100: "#c5d0e6",
          200: "#9fb0d5",
          300: "#7891c4",
          400: "#5a7ab8",
          500: "#3c62ac",
          600: "#2e508d",
          700: "#1f3d6e",
          800: "#112a4f",
          900: "#001730",
          950: "#002147",
        },
        gold: {
          50:  "#fdf9ee",
          100: "#f9efcf",
          200: "#f3de9e",
          300: "#ebc96c",
          400: "#e4b847",
          500: "#d9a128",
          600: "#b97e1e",
          700: "#92601a",
          800: "#6b461b",
          900: "#4a2f16",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-nunito)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.jpg')",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-in-left": "slideInLeft 0.6s ease forwards",
        "count-up": "countUp 1s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-24px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        "card": "0 4px 24px rgba(0,23,48,0.08)",
        "card-hover": "0 8px 40px rgba(0,23,48,0.15)",
        "nav": "0 2px 20px rgba(0,23,48,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;