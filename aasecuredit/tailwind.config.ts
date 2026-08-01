import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy:   { DEFAULT: "#0B2748", light: "#0D3060", dark: "#071A30" },
        electric:{ DEFAULT: "#2775E6", light: "#4B8EF0", dark: "#1A5CC4" },
        slate:  { DEFAULT: "#F0F4F8" },
        steel:  { DEFAULT: "#64748B" },
        success:{ DEFAULT: "#10B981" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
