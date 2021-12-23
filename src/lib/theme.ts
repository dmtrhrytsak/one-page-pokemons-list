import { css, DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  fontStack: 'Libre Franklin, sans-serif',
  typography: {
    headingSmall: css`
      font-size: 24px;
    `,
  },
  colors: {
    white: '#fff',
    yellowishWhite: '#fffcf1',
    blue: '#b0cbd3',
    pureBlue: '#0066cc',
    lightBlue: '#e8f7ff',
    lightGreen: '#f0ffe8',
    red: '#e23131',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '960px',
    desktop: '1024px',
  },
};

export default theme;
