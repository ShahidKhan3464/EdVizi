/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,mdx}',
    './src/common/**/*.{js,jsx,mdx}',
    './src/components/**/*.{js,jsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#1F1F1F',
        gray700: '#344054',
        gray900: '#101828',
        secondary: '#007a5a',
        greenNormal: '#19E19B',
        greenActive: '#14B47C'
      },
      screens: {
        sm: '520px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      }
    }
  },
  plugins: []
};
