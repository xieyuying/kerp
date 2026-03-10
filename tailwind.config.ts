import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        kerp: {
          panel: "#121f37",
          panelSoft: "#162743",
          line: "#2d3d61",
          text: "#f4f7ff",
          muted: "#90a7cf",
          primary: "#ffd149"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 209, 73, 0.2), 0 18px 40px rgba(0, 0, 0, 0.35)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Noto Sans SC'", "sans-serif"],
      },
      backgroundImage: {
        app: "radial-gradient(1200px 500px at -10% -10%, #1f3c78 0%, transparent 55%), radial-gradient(900px 460px at 110% -20%, #6f4f14 0%, transparent 50%), linear-gradient(160deg, #081224 0%, #0d1830 55%, #0c1730 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
