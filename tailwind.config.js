/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        "active-one": ["ActiveOneRegular", "sans-serif"],
        active: ["ActiveRegular", "sans-serif"],
        "active-two": ["ActiveTwoRegular", "sans-serif"],
        "dm-sans": ["DmSans", "sans-serif"],
        "dm-sans-italic": ["DmSansItalic", "sans-italic"],
      },
      colors: {
        light: "#EEEEEE",
        dark: "#161717",
        "l-blue": "#A6C0FE",
        "l-red": "#F68084",
        "d-blue": "#222836",
        "d-red": "#2F1718",
      },
      backgroundImage: {
        "grad-l-b-r": "linear-gradient(to bottom right, #A6C0FE, #F68084)",
        "grad-d-b-r": "linear-gradient(to bottom right, #222836, #2F1718)",
        "grad-white": `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.25))`,
        "grad-black": `linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1))`,
      },
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [],
};
