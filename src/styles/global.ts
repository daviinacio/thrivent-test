import { createGlobalStyle } from "styled-components";

export const GlobalStylesheet = createGlobalStyle`

  @font-face{
    font-family:'Basis Grt';
    font-style:normal;
    font-weight:300;
    font-display:swap;
    src:url(/font/basisgrtforthrivent-lt.woff2) 
    format('woff2');
  }

  @font-face{
    font-family:'Basis Grt';
    font-style:normal;
    font-weight:400;
    font-display:swap;
    src:url(/font/basisgrtforthrivent.woff2) 
    format('woff2');
  }

  @font-face{
    font-family:'Basis Grt';
    font-style:italic;
    font-weight:400;
    font-display:swap;
    src:url(/font/basisgrtforthrivent-italic.woff2) 
    format('woff2');
  }

  @font-face{
    font-family:'Basis Grt';
    font-style:normal;
    font-weight:500;
    font-display:swap;
    src:url(/font/basisgrotesquemedium-normal-normal.woff2) 
    format('woff2');
  }

  @font-face{
    font-family:'Basis Grt';
    font-style:normal;
    font-weight:600;
    font-display:swap;
    src:url(/font/basisgrtforthrivent-bold.woff2) 
    format('woff2');
  }

  @font-face{
    font-family:'Basis Grt';
    font-style:normal;
    font-weight:700;
    font-display:swap;
    src:url(/font/basisgrtforthrivent-bold.woff2) 
    format('woff2');
  }

  @font-face{
    font-family:'Basis Grt';
    font-style:normal;
    font-weight:800;
    font-display:swap;
    src:url(/font/basisgrtforthrivent-blk.woff2) 
    format('woff2');
  }

  @font-face{
    font-family:'Burgess';
    font-style:normal;
    font-weight:800;
    font-display:swap;
    src:url(/font/burgessforthrivent-bold.woff2) 
    format('woff2');
  }


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

    font-family: Basis Grt, sans-serif;
    font-weight: 400;
    font-size: 14px;
    position: relative;
  }

  a {
    text-decoration: none;
    color: #32769f;
  }

  a:hover {
    text-decoration: none;
    color: #1c4259;
  }
`;
