/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        nameTag: {
          '0%': {
            transform: 'translate(-50%, 0px)',
            left: '50%',
            opacity: 0
          },
          '100%': {
            transform: 'translate(-50%, -20px)',
            left: '50%',
            opacity: 1
          },
        }
      },
      colors: {
        'primary': '#20273f',
        'secondary': '#7c859a',
        'primary-red': '#e81f3e',
        'primary-blue': '#38a1f3',
        'primary-yellow': '#ffcb05'
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif']
      },
      animation: {
        'name-tag': 'nameTag .2s ease-out both'
      }
    },
  },
  plugins: [],
}
