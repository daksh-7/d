// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Scans your HTML
  ],
  theme: {
    extend: {
      fontFamily: {
        // This makes 'Poppins' the default font for the 'font-sans' utility
        // and for Tailwind's base styles if your HTML element doesn't override it.
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Defining your accent color here allows you to use Tailwind classes like:
        // `text-accent`, `bg-accent`, `border-accent`
        // This can be an alternative to using the CSS variable --accent for some cases.
        accent: '#0ef6ff',
      }
    },
  },
  plugins: [],
};