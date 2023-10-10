import { type Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        wdc: ["var(--font-roboto)", ...fontFamily.sans],
      }
    },
  },
  plugins: [],
} satisfies Config;
