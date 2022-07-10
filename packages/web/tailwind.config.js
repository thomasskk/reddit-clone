module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    '../../common/web/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        s1: '1px 1px 7px 2px rgba(0, 0, 0, 0.25)',
        s2: '2px 2px 4px 2px rgba(0, 0, 0, 0.1)',
      },
      height: {
        min: 'min-content',
        max: 'max-content',
      },
      colors: {
        primary1: '#387180',
        primary2: '#ff8900',
        primary3: '#a8a8a8',
        primary4: '#009f1e',
        primary5: '#666666',
        error1: '#dd2222',
      },
    },
  },
  plugins: [],
}
