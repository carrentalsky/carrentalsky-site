import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020b18",
          900: "#061326",
          800: "#0a1c35"
        },
        skybrand: {
          500: "#2487ff",
          400: "#37b7ff",
          300: "#76d8ff"
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(36, 135, 255, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
