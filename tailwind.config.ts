/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sfpro: [
          'var(--font-sf)'
        ]
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(111deg, rgba(255, 255, 255, 0.02) 0%, rgba(50, 205, 50, 0.16) 100%)",
      },

      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: "576px",
          md: "768px",
          lg: "1024px",
          xl: "1440px",
          "2xl": "1920px"
        }
      },
      colors: {
        primary: '#118577',
        secondary: '#F8AE30',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
