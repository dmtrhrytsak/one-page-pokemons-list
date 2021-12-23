import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;

    background-color: ${({ theme }) => theme.colors.yellowishWhite};
  }

  body {
    font-family: ${({ theme }) => theme.fontStack};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;

    cursor: pointer;
  }
`;

export default GlobalStyles;
