/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // Enable dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'markdown-heading': '#E5E7EB', // Light gray for headings in dark mode
        'markdown-link': '#93C5FD', // Light blue for links
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}