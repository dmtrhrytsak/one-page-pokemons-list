import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontStack: string;
    typography: {
      headingSmall: FlattenInterpolation;
    };
    colors: {
      white: string;
      yellowishWhite: string;
      blue: string;
      lightBlue: string;
      pureBlue: string;
      lightGreen: string;
      red: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
