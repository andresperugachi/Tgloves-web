import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#f7931d",
          dark: "#d97a08",
          light: "#fff4e6",
        },
        ink: {
          DEFAULT: "#3f5053",
          dark: "#2c3a3c",
          light: "#6b7d80",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
