/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary: colors.indigo,
      secondary: colors.yellow,
      neutral: colors.gray,
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      // screens: {
      //   'sm': {"max":'640px'},
      //   // => @media (min-width: 640px) { ... }
  
      //   'md': {"min":'768px'},
      //   // => @media (min-width: 768px) { ... }
  
      //   'lg': '1024px',
      //   // => @media (min-width: 1024px) { ... }
  
      //   'xl': '1280px',
      //   // => @media (min-width: 1280px) { ... }
  
      //   '2xl': '1536px',
      //   // => @media (min-width: 1536px) { ... }
      // },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
