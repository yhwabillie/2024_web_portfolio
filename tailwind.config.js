/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

function pxToRem(px, base = 16) {
  return `${px / base}rem`
}

module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/layouts/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xxs: pxToRem(280),
      xs: pxToRem(416),
      sm: pxToRem(768),
      md: pxToRem(1024),
      lg: pxToRem(1440),
      xl: pxToRem(1903),
    },
    minHeight: {
      full: '100%',
      layout: '100vh',
      'dynamic-layout-small': `calc(100vh - ${pxToRem(72)})`,
      'dynamic-layout-medium': `calc(100vh - ${pxToRem(84)})`,
      'dynamic-layout-large': `calc(100vh - ${pxToRem(90)})`,
    },
    minWidth: {
      auto: 'auto',
      250: pxToRem(250),
      300: pxToRem(300),
    },
    maxWidth: {
      xxs: '100%',
      xs: pxToRem(384),
      sm: pxToRem(712),
      md: pxToRem(948),
      lg: pxToRem(1316),
      xl: pxToRem(1712),
      sidebar: pxToRem(412),
      'fit-content': 'fit-content',
    },
    width: {
      fit: 'fit-content',
      full: '100%',
      1: pxToRem(1),
      38: pxToRem(38),
      'icon-medium': pxToRem(34),
      'icon-large': pxToRem(36),
      'icon-xlarge': pxToRem(48),
      tooltip: pxToRem(100),
      15: pxToRem(15),
      24: pxToRem(24),
      30: pxToRem(30),
      40: pxToRem(40),
      50: pxToRem(50),
      60: pxToRem(60),
      70: pxToRem(70),
      75: pxToRem(75),
      80: pxToRem(80),
      90: pxToRem(90),
      82: pxToRem(82),
      100: pxToRem(100),
      130: pxToRem(130),
      150: pxToRem(150),
      200: pxToRem(200),
      300: pxToRem(300),
      400: pxToRem(400),
      350: pxToRem(350),
      'widgets-180': `calc(${pxToRem(180)} - ${pxToRem(30)})`,
      180: pxToRem(180),
      280: pxToRem(280),
      206: pxToRem(206),
      232: pxToRem(232),
      245: pxToRem(245),
      260: pxToRem(260),
      272: pxToRem(272),
      430: pxToRem(430),
      450: pxToRem(450),
      755: `calc(${pxToRem(755)} - ${pxToRem(18)})`,
      1094: `calc(${pxToRem(1094)} - ${pxToRem(30)})`,
      1424: `calc(${pxToRem(1424)} - ${pxToRem(30)})`,
    },
    height: {
      fit: 'fit-content',
      full: '100%',
      auto: 'auto',
      1: pxToRem(1),
      10: pxToRem(10),
      15: pxToRem(15),
      24: pxToRem(24),
      38: pxToRem(38),
      'icon-medium': pxToRem(34),
      'icon-large': pxToRem(36),
      'icon-xlarge': pxToRem(48),
      'header-small': pxToRem(72),
      'header-medium': pxToRem(84),
      'header-large': pxToRem(90),
      'dynamic-layout-small': `calc(100vh - ${pxToRem(72)})`,
      'dynamic-layout-medium': `calc(100vh - ${pxToRem(84)})`,
      'dynamic-layout-large': `calc(100vh - ${pxToRem(90)})`,
      30: pxToRem(30),
      40: pxToRem(40),
      50: pxToRem(50),
      60: pxToRem(60),
      70: pxToRem(70),
      75: pxToRem(75),
      80: pxToRem(80),
      82: pxToRem(82),
      90: pxToRem(90),
      100: pxToRem(100),
      102: pxToRem(102),
      120: pxToRem(120),
      124: pxToRem(124),
      130: pxToRem(130),
      164: pxToRem(164),
      150: pxToRem(150),
      158: pxToRem(158),
      160: pxToRem(160),
      170: pxToRem(170),
      180: pxToRem(180),
      206: pxToRem(206),
      200: pxToRem(200),
      220: pxToRem(220),
      250: pxToRem(250),
      232: pxToRem(232),
      256: pxToRem(256),
      259: pxToRem(259),
      300: pxToRem(300),
      272: pxToRem(272),
      340: pxToRem(340),
      400: pxToRem(400),
      405: pxToRem(405),
      486: pxToRem(486),
      500: pxToRem(500),
      621: pxToRem(621),
      800: pxToRem(800),
      808: pxToRem(808),
      1000: pxToRem(1000),
    },
    fontSize: {
      'icon-small': '1.625rem',
      'icon-medium': '2.125rem',
      sm: '0.875rem' /* 14 */,
      md: '1rem' /* 16 */,
      lg: '1.125rem' /* 18 */,
      xl: '1.5rem' /* 24 */,
      12: pxToRem(12),
      15: pxToRem(15),
      18: pxToRem(18),
      20: pxToRem(20),
      22: pxToRem(22),
      24: pxToRem(24),
      26: pxToRem(26),
      30: pxToRem(30),
      40: pxToRem(40),
      32: pxToRem(32),
      40: pxToRem(40),
      48: pxToRem(48),
      50: pxToRem(50),
      52: pxToRem(52),
      60: pxToRem(60),
      70: pxToRem(70),
      80: pxToRem(80),
      90: pxToRem(90),
      100: pxToRem(100),
      120: pxToRem(120),
    },
    lineHeight: {
      'header-small': '4.5rem',
      'header-medium': '5.25rem',
      'header-large': '5.625rem',
      lg: '2.25rem' /* 36 */,
      xl: '2.5rem' /* 40 */,
      1: 1,
      2: 2,
      1.3: 1.3,
      1.4: 1.4,
      1.6: 1.6,
      23: pxToRem(23),
      64: pxToRem(64),
    },
    borderRadius: {
      xxs: pxToRem(12),
      xs: pxToRem(18),
      sm: pxToRem(20),
      md: pxToRem(24),
      lg: pxToRem(36),
      0: 0,
    },
    colors: {
      theme: 'var(--theme)',
      'theme-reverse': 'var(--theme-reverse)',
      'theme-gray': 'var(--theme-gray)',
      'theme-active': 'var(--theme-active)',
      'theme-unactive': 'var(--theme-unactive)',
      'theme-hover': 'var(--theme-hover)',
      black: 'var(--black)',
      white: 'var(--white)',
      'blue-1': 'var(--blue-1)',
      'blue-2': 'var(--blue-2)',
      'blue-3': 'var(--blue-3)',
      'gray-1': 'var(--gray-1)',
      transparent: 'transparent',
    },
    margin: {
      'header-small': pxToRem(72),
      'header-medium': pxToRem(84),
      'header-large': pxToRem(90),
      auto: 'auto',
      0: 0,
      5: pxToRem(5),
      8: pxToRem(8),
      10: pxToRem(10),
      14: pxToRem(14),
      15: pxToRem(15),
      16: pxToRem(16),
      18: pxToRem(18),
      20: pxToRem(20),
      30: pxToRem(30),
      35: pxToRem(35),
      40: pxToRem(40),
      50: pxToRem(50),
      45: pxToRem(45),
      60: pxToRem(60),
      70: pxToRem(70),
      80: pxToRem(80),
      100: pxToRem(100),
      150: pxToRem(150),
      200: pxToRem(200),
    },
    padding: {
      0: 0,
      'header-small': pxToRem(72),
      'header-medium': pxToRem(84),
      'header-large': pxToRem(90),
      xs: '0.875rem' /* 14 */,
      sm: '1.5rem' /* 24 */,
      md: '2.25rem' /* 36 */,
      lg: '2.938rem' /* 47.008 */,
      xl: '4.125rem' /* 66 */,
      2: '1.25rem' /* 20 */,
      5: pxToRem(5),
      10: pxToRem(10),
      12: pxToRem(12),
      14: pxToRem(14),
      15: pxToRem(15),
      16: pxToRem(16),
      20: pxToRem(20),
      25: pxToRem(25),
      35: pxToRem(35),
      30: pxToRem(30),
      40: pxToRem(40),
      50: pxToRem(50),
      23: pxToRem(23),
      24: pxToRem(24),
      25: pxToRem(25),
      28: pxToRem(28),
      58: pxToRem(58),
    },
    zIndex: {
      0: 9999,
      1: 1000,
      2: 500,
      3: 0,
      4: -1,
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0,0,0,.45)',
        },
        '.text-shadow-s': {
          'text-shadow': '2px 2px 2px rgba(0,0,0,.2)',
        },
        '.summary-title-bg': {
          background: 'linear-gradient(77deg,rgba(0,0,0,.4),transparent 85%)',
        },
        '.l-b-corner': {
          'background-image': 'var(--theme-corner-left-bottom)',
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
          zIndex: 1,
        },
        '.r-t-corner': {
          'background-image': 'var(--theme-corner-right-top)',
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
          zIndex: 1,
        },
        '.bubble-tail': {
          'background-image': 'var(--theme-bubble-tail)',
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
          zIndex: 1,
        },
        '.highlight': {
          background: 'linear-gradient(to top, var(--blue-1) 10%, transparent 10%)',
        },
        perspective: {
          perspective: pxToRem(900),
        },
      })
    }),
  ],
}
