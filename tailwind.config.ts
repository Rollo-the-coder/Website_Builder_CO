import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#F6F3EC",
          deep: "#EFEAE0",
        },
        surface: "#FFFFFF",
        mist: "#E8EEF0",
        sage: "#E6EEE4",
        lavender: "#EEF0E8",
        ink: {
          DEFAULT: "#16243B",
          soft: "#3C4A63",
          muted: "#6B7892",
        },
        line: "#E5DFD3",
        primary: {
          DEFAULT: "#13283F",
          hover: "#0B1B2C",
          foreground: "#F6F3EC",
        },
        accent: {
          DEFAULT: "#2F5D50",
          soft: "#5F7F6A",
          blue: "#526A7A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(19, 40, 63, 0.04), 0 8px 24px rgba(19, 40, 63, 0.06)",
        lift: "0 2px 4px rgba(19, 40, 63, 0.05), 0 18px 40px rgba(19, 40, 63, 0.10)",
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
