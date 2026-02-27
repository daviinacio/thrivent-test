import { createGlobalStyle } from "styled-components";

export const GlobalStylesheet = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    user-select: none;
  }

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};

    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 14px;
  }
`;
