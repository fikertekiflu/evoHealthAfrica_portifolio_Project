/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        keyframes: {
          slideFromRight: {
            '0%': { transform: 'translateX(100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          slideFromLeft: {
            '0%': { transform: 'translateX(-100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
        },
        animation: {
          slideFromRight: 'slideFromRight 0.5s ease-in-out',
          slideFromLeft: 'slideFromLeft 0.5s ease-in-out',
        },
      },
  },
  plugins: [],
}

