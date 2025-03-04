/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('./src/assets/pattern-bg.png')",
      })
    },
  },
  plugins: [],
}

