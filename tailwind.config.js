/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0B0F1A",
        abyss: "#070B16",
        panel: "#0F1729",
        line: "rgba(255,255,255,0.08)",
        electric: "#7C3AED",
        orchid: "#A855F7",
        cyanGlow: "#22D3EE",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 40px rgba(168,85,247,0.28)",
        intense: "0 24px 100px rgba(9,13,29,0.8)",
        card: "0 24px 80px rgba(5,8,22,0.5)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.95", transform: "scale(1.08)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.25", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 5s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

