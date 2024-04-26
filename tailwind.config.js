/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundColor: {
        'custom-black': '#161616'
      },
      colors: {
        'custom-dark': '#142629',
        'custom-blue': '#2957ff',
        'custom-red': '#F00',
      },
      spacing: {
        '5': '2.25rem', // You can adjust this value as needed
      },
      maxWidth: {
        '4xl': '30rem', // You can adjust this value as needed
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}