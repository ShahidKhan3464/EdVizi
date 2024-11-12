/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,mdx}',
    './src/common/**/*.{js,jsx,mdx}',
    './src/layout/**/*.{js,jsx,mdx}',
    './src/components/**/*.{js,jsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        sm: '520px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px'
      },
      colors: {
        black: '#1F1F1F',
        danger: '#D81919',
        gray200: '#EAECF0',
        gray300: '#D0D5DD',
        gray400: '#98A2B3',
        gray500: '#667085',
        gray600: '#475467',
        gray700: '#344054',
        gray900: '#101828',
        error600: '#D92D20',
        error700: '#B42318',
        secondary: '#007a5a',
        greenNormal: '#19E19B',
        greenActive: '#14B47C'
      }
    }
  },
  plugins: []
};
