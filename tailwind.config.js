module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    extend: {
      fontSize: {
        xxs: ['0.625rem', '1.125rem'],
      },
      boxShadow: {
        s1: '1px 1px 7px 2px rgba(0, 0, 0, 0.25)',
        s2: '2px 2px 4px 2px rgba(0, 0, 0, 0.1)',
      },
      height: {
        min: 'min-content',
        max: 'max-content',
      },
      colors: {
        primary1: 'white',
        primary2: '#F6F7F8',
        primary3: '',
        text1: '#1c1c1c',
        text2: '#6b7280',
      },
    },
  },

  plugins: [],
}
