module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Kanit', 'sans-serif'],
      body: ['Kanit', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
    },
    divideWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
    },
    extend: {
      fontFamily: {
        'sans': ['Kanit', 'sans-serif']
      },
      colors: {
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  },
  variants: {
    appearance: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    fill: [],
    divideWidth: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [
  ],
}