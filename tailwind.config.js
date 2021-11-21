module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'port-gore': { DEFAULT: '#29235C', '50': '#786FC8', '100': '#6A60C2', '200': '#5145B5', '300': '#433997', '400': '#362E7A', '500': '#29235C', '600': '#171433', '700': '#05040B', '800': '#000000', '900': '#000000' },
        'mantis': { DEFAULT: '#69CF61', '50': '#EFFAEE', '100': '#E0F5DE', '200': '#C2ECBF', '300': '#A4E2A0', '400': '#87D980', '500': '#69CF61', '600': '#43BE3A', '700': '#34932D', '800': '#256820', '900': '#163D13' },
        'concrete': { DEFAULT: '#F2F2F2', '50': '#FFFFFF', '100': '#FFFFFF', '200': '#FFFFFF', '300': '#FFFFFF', '400': '#FFFFFF', '500': '#F2F2F2', '600': '#D6D6D6', '700': '#BABABA', '800': '#9E9E9E', '900': '#828282' },
        'monza': { DEFAULT: '#DD052B', '50': '#FD9DAE', '100': '#FC899D', '200': '#FB617C', '300': '#FB395B', '400': '#FA113A', '500': '#DD052B', '600': '#A60420', '700': '#6F0316', '800': '#38010B', '900': '#020000' },
        'malibu': { DEFAULT: '#61A3FF', '50': '#FFFFFF', '100': '#FFFFFF', '200': '#DBEAFF', '300': '#B3D3FF', '400': '#8ABBFF', '500': '#61A3FF', '600': '#2982FF', '700': '#0064F0', '800': '#004DB8', '900': '#003580' },
        'pink-salmon': { DEFAULT: '#FF8CBC', '50': '#FFFFFF', '100': '#FFFFFF', '200': '#FFFFFF', '300': '#FFDEEC', '400': '#FFB5D4', '500': '#FF8CBC', '600': '#FF549B', '700': '#FF1C7B', '800': '#E3005F', '900': '#AB0047' },
        'flamingo': { DEFAULT: '#F16127', '50': '#FCDFD3', '100': '#FBD1C0', '200': '#F8B59A', '300': '#F69974', '400': '#F37D4D', '500': '#F16127', '600': '#D2460E', '700': '#9E350A', '800': '#692307', '900': '#341103' },
        'porsche': { DEFAULT: '#E59E6A', '50': '#FFFFFF', '100': '#FDF8F5', '200': '#F7E2D2', '300': '#F1CBAF', '400': '#EBB58D', '500': '#E59E6A', '600': '#DD7F3A', '700': '#BE6321', '800': '#8E4A19', '900': '#5E3110' },
        'yellow-green': { DEFAULT: '#BAE56A', '50': '#FFFFFF', '100': '#FAFDF5', '200': '#EAF7D2', '300': '#DAF1AF', '400': '#CAEB8D', '500': '#BAE56A', '600': '#A4DD3A', '700': '#87BE21', '800': '#658E19', '900': '#435E10' },
        'sea-mist': {  DEFAULT: '#CCE1D4',  '50': '#FFFFFF',  '100': '#FFFFFF',  '200': '#FFFFFF',  '300': '#FFFFFF',  '400': '#E6F0EA',  '500': '#CCE1D4',  '600': '#A9CCB6',  '700': '#85B798',  '800': '#62A37B',  '900': '#4C8160'},
      },
      fontFamily: {
        'montserrat': ['montserrat', '"source sans pro"', 'sans-serif'],
        'nunito': ['"Nunito Sans"', '"source sans pro"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
