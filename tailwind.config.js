module.exports = {
    purge: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
    theme: {

      textShadow: {
        'default' : '2px 2px 0 #3399FF, 2px -2px 0 #3399FF, -2px 2px 0 #3399FF, -2px -2px 0 #3399FF, 2px 0px 0 #3399FF, 0px 2px 0 #3399FF, -2px 0px 0 #3399FF, 0px -2px 0 #3399FF'
      },

      extend: {

        fontFamily: {

          'rubikMonoOne' : ['Rubik Mono One', 'sans-serif'],
          'MontserratSemiBold' : ['Montserrat', 'sans-serif'],
          'Terminal' : ['VT323', 'monospace'],
          'Catamaran' : ['Catamaran', 'sans-serif']

        },
        fontSize : {
          '7xl': '4.5rem'
        },

        colors : {
          
          'blue-mist': '#90AFC5',
          'blue-stone': '#336B87',
          'dark-shadow': '#2A3132',
          'red-autumn': '#763626',
          'color-primario' : '#FFFFFF',
          'color-secundario' : 'f',
          
        },

        width : {
          '128' : '32rem',
        }
      },
    },
    variants: {},
    plugins: [

      require('tailwindcss-textshadow')
    ],
  }