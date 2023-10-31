import { type Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        wdc: ["var(--font-roboto)", ...fontFamily.sans],
      }
    },
  },
  plugins: [
    plugin(function( {addBase, theme} ) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl')}  
      })
    })
  ],
} satisfies Config;
