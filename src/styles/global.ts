import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 html,
  body {
    color: ${({ theme }) => theme.default.text};
    background-color: ${({ theme }) => theme.default.bgColor};
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
    height: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img {
    user-select: none;
    -webkit-user-drag: none;
  }

  button {
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    user-select: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    user-select: none;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    appearance: none;
    -webkit-appearance: none;
  }

  ::selection {
    background: ${({ theme }) => theme.default.selection};
    -webkit-text-fill-color: #fff;
  }

  ::-webkit-scrollbar {
    height: 4px;
    width: 6px;
    background: ${({ theme }) => theme.default.scroll};
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.default.thumb};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.default.thumbHover};
  }
`
