/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1A1A1A',
        'dark-card': '#2C2C2C',
        'orange-hover': '#FF7F50',
      },
    },
  },
  plugins: [],
  
}
