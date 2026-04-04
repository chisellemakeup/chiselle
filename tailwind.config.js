/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "20px",
        md: "20px",
        lg: "60px",
        xl: "60px",
      },
      screens: {
        sm: "100% !important",
        md: "100% !important",
        lg: "100% !important",
        xl: "1440px",
      },
    },
    extend: {
      maxWidth: {
        container: "1440px",
      },
      colors: {
        brand: {
          primary: "#8C3038",
          secondary: "#2B0405",
          dark: "#3d2b1f",
          darker: "#2a1e15",
          brown: "#6b4c3b",
          mid: "#9c7a5e",
          gold: "#c9a882",
          light: "#e8d5b7",
          cream: "#f5ede0",
          bg: "#ffffff",
          pink: "#f5e6e8",
          pinkLight: "#faf0f2",
        },
      },
      fontFamily: {
        primary: ["Lora-Regular", "Georgia", "serif"],
        secondary: ["New-Icon-Serif", "system-ui", "sans-serif"],
        script: ["New-Icon-Script", "cursive"],
        accent: ["Fontspring-Bold", "system-ui", "sans-serif"],
        base: ["Fontspring-Regular", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        marqueeUp: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-33.33%)" },
        },
        marqueeDown: {
          from: { transform: "translateY(-33.33%)" },
          to: { transform: "translateY(0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        marqueeUp: "marqueeUp 25s linear infinite",
        marqueeDown: "marqueeDown 25s linear infinite",
        fadeUp: "fadeUp 0.7s ease forwards",
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(circle at 20% 50%, rgba(245,230,232,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(245,230,232,0.3) 0%, transparent 40%)",
      },
    },
  },
  plugins: [],
};
