/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
    './node_modules/flowbite/**/*.js'
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      slate: colors.slate,
      indigo: colors.indigo,
      sky: colors.sky,
      lime: colors.lime,
      neutral: colors.neutral,  // Used mainly for text color
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
        600: "#ea580c",
      }, // Primary colors, used mainly for links, buttons and svg icons
      primary: {
        xlighter: '#00B9FF',
        lighter: '#00A0DD',
        default: '#0F4B8F',
        normal: '#0F4B8F',
        darker: '#092C53',
      },

      secondary: {
        lighter: '#A1CE7D',
        default: '#76BC43',
        darker: '#68A63B',
      },
      red: colors.red, // Used for bookmark icon
      blue: colors.blue, // 
      green: colors.green, // 

      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
    require('flowbite/plugin')
  ],
};
