module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'balsamiq': ['"Balsamiq Sans", cursive'],
        'fira-code': ['"Fira Code", monospace']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
