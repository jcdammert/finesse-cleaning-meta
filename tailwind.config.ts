import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0c0f",
        teal: "#3dd9c4",
        "off-white": "#e8e8e8",
        "gray-400": "#9ca3af",
        "gray-500": "#6b7280",
        "card-bg": "#141618",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-delay-1": "fadeIn 0.6s ease-out 0.1s forwards",
        "fade-in-delay-2": "fadeIn 0.6s ease-out 0.2s forwards",
        "fade-in-delay-3": "fadeIn 0.6s ease-out 0.3s forwards",
        "fade-in-delay-4": "fadeIn 0.6s ease-out 0.4s forwards",
        "fade-in-delay-5": "fadeIn 0.6s ease-out 0.5s forwards",
        "fade-in-delay-6": "fadeIn 0.6s ease-out 0.6s forwards",
        pulse: "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
