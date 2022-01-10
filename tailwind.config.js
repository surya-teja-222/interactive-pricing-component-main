module.exports = {
  content: [
    './**/*.html',
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '1040px',
      'lg': '1440px', 
      'smm': {'max': '375px'},
      'mdm': {'max': '1040px'},
      'lgm': {'max': '1440px'},
    },
    extend: {
      colors: {
        'soft-cyan' : 'hsl(174, 77%, 80%)',
        'strong-cyan' : 'hsl(174, 86%, 45%)',
        'l-grey-red' : 'hsl(14, 92%, 95%)',
        'l-red': 'hsl(15, 100%, 70%)',
        'pale-blue' : 'hsl(226, 100%, 87%)',
        'white' : 'hsl(0, 0%, 100%)',
        'very-pale-blue' : 'hsl(230, 100%, 99%)',
        'very-pale-blue-2' : 'hsl(222, 87%, 97%)',
        'l-greyish-blue' : 'hsl(224, 65%, 95%)',
        'l-greyish-blue-2' : 'hsl(223, 50%, 87%)',
        'greyish-blue' : 'hsl(225, 20%, 60%)',
        'd-des-blue' : 'hsl(227, 35%, 25%)'
      },
      fontFamily:{
          'Manrope' : 'Manrope, sans-serif',
      },
    }
  },
  plugins: [],
}
