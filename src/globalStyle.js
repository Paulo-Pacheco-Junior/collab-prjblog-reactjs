import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BG_GRAY_900};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: "Noto Sans", sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  a, button {
    margin-top: 1rem;
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover, button:hover {
    filter: brightness(0.85);
  }
`;
