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
          50:  "#eef3fb",
          100: "#d7e2f4",
          200: "#aec5e8",
          300: "#7fa3d9",
          400: "#5583c9",
          500: "#3766b3",
          600: "#295092",
          700: "#1d3c72",
          800: "#122a54",
          900: "#0a1b3a",
          950: "#051229",
        },
        gold: {
          50:  "#fefaec",
          100: "#fcf1c9",
          200: "#f9e18e",
          300: "#f5cc53",
          400: "#f2b92b",
          500: "#eba413", // brighter, more energetic amber-gold
          600: "#d0800c",
          700: "#ad5c0e",
          800: "#8c4712",
          900: "#733a13",
        },
        // Electric accent for gradients / glows (used sparingly)
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.jpg')",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
        "mesh-navy":
          "radial-gradient(at 20% 20%, rgba(55,102,179,0.35) 0, transparent 50%), radial-gradient(at 80% 0%, rgba(235,164,19,0.18) 0, transparent 50%), radial-gradient(at 60% 90%, rgba(6,182,212,0.15) 0, transparent 55%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-in-left": "slideInLeft 0.6s ease forwards",
        "count-up": "countUp 1s ease forwards",
        "ken-burns": "kenBurns 14s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-ring": "pulseRing 2.4s cubic-bezier(0.22,1,0.36,1) infinite",
        "marquee": "marquee 28s linear infinite",
        "shimmer": "shimmer 2.4s linear infinite",
        "gradient-x": "gradientX 8s ease infinite",
        "scroll-hint": "scrollHint 1.8s ease-in-out infinite",
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
        kenBurns: {
          from: { transform: "scale(1) translate(0, 0)" },
          to: { transform: "scale(1.12) translate(-1.5%, -1%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        scrollHint: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.4" },
        },
      },
      boxShadow: {
        "card": "0 4px 24px rgba(5,18,41,0.08)",
        "card-hover": "0 16px 48px rgba(5,18,41,0.16)",
        "nav": "0 2px 20px rgba(5,18,41,0.10)",
        "glow-gold": "0 0 32px rgba(235,164,19,0.35)",
        "glass": "0 8px 32px rgba(5,18,41,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      maxWidth: {
        "8xl": "88rem", // wider container for big monitors
      },
    },
  },
  plugins: [],
};

export default config;
