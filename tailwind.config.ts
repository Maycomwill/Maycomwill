import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        title: ["var(--font-anton)"],
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      animation: {
        "fade-in-left": "fade-left 1500ms ease-in-out",
        "fade-in-right": "fade-right 1500ms ease-in-out",
        "border-transition": "border-transition 2000ms ease-in-out infinite",
        "logo-slide": "slide 55s infinite linear",
        "logo-slide-reverse": "slide-reverse 60s infinite linear",
      },
      keyframes: {
        "fade-left": {
          "0%": {
            opacity: "0%",
            transform: "translateX(-200px)",
          },
          "50%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
            transform: "translateX(0px)",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(200px)",
            opacity: "0%",
          },
          "50%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
            transform: "translateX(0px)",
          },
        },
        "border-transition": {
          "0%": {
            borderColor: colors.purple[500],
          },
          "33%": {
            borderColor: colors.cyan[500],
          },
          "66%": {
            borderColor: colors.emerald[500],
          },
          "100%": {
            borderColor: colors.purple[500],
          },
        },
        slide: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        "slide-reverse": {
          "0%": {
            transform: "translateX(-110%)",
          },
          "100%": {
            transform: "translateX(-10%)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
