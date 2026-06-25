/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro', 'sans-serif'],
      },
      colors: {
        // Luxury Charcoal #26292C
        charcoal: {
          50:  '#f4f4f4',
          100: '#e8e8e8',
          200: '#d0d0d0',
          300: '#a8a8a9',
          400: '#797a7b',
          500: '#585a5c',
          600: '#464849',
          700: '#383b3d',
          800: '#303234',
          900: '#26292C',
          950: '#141618',
        },
        // Espresso Brown #614633
        espresso: {
          50:  '#f8f3ef',
          100: '#efe4d9',
          200: '#dfc8b3',
          300: '#c9a485',
          400: '#b47f5a',
          500: '#9a6340',
          600: '#7d4f32',
          700: '#614633',
          800: '#4e3729',
          900: '#3e2d22',
          950: '#221712',
        },
        // Champagne Gold #B59060
        gold: {
          50:  '#faf6f0',
          100: '#f3ead9',
          200: '#e6d2b3',
          300: '#d4b485',
          400: '#c49a64',
          500: '#B59060',
          600: '#9a7549',
          700: '#7d5e3a',
          800: '#654c30',
          900: '#533e28',
          950: '#2c2014',
        },
        // Warm Ivory #DDDAD6
        ivory: {
          50:  '#fafaf9',
          100: '#f5f4f2',
          200: '#DDDAD6',
          300: '#cbc6c0',
          400: '#b0a9a1',
          500: '#918981',
          600: '#756e67',
          700: '#5f5954',
          800: '#4e4945',
          900: '#413d3a',
          950: '#221f1d',
        },
        // Dark Walnut #453327
        walnut: {
          50:  '#f7f3ef',
          100: '#ede4db',
          200: '#dac8b5',
          300: '#c2a588',
          400: '#a87f5e',
          500: '#8f6544',
          600: '#714f35',
          700: '#5a3f2b',
          800: '#453327',
          900: '#362820',
          950: '#1d1510',
        },
      },
      animation: {
        'fade-in':   'fadeIn 0.6s ease-out',
        'slide-up':  'slideUp 0.5s ease-out',
        'slide-down':'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn:    { '0%': { opacity: '0' },                                    '100%': { opacity: '1' } },
        slideUp:   { '0%': { transform: 'translateY(20px)', opacity: '0' },    '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideDown: { '0%': { transform: 'translateY(-10px)', opacity: '0' },   '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
    },
  },
  plugins: [],
};
