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
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
};