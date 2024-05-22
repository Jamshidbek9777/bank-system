import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --body: #F8FAFC;
    --dark: #000;
    --gray: #64748b;
    --black: #323232;
    --white: #FFFFFF;
    --primary: #0EA5E9;
    --secondary: #e7f6fd;
    --footer: #0D5A7B;
    --sky-100: #E0F2FE;
    --sky-300: #7DD3FC;
    --sky-900: #0A4C69;
    --card-bg: linear-gradient(180deg, #0ea5e9 0%, #0489c5 100%);
    --ss: 0.5rem; // 8px
    --xs: 0.75rem; // 12px
    --sm: 0.875rem; // 14px
    --base: 1rem; // 16px
    --lg: 1.125rem; // 18px
    --xl: 1.25rem; // 20px
    --2xl: 1.5rem; // 24px
    --thirty: 1.875rem; // 30px
    --3xl: 2rem; // 32px
    --4xl: 3rem; // 48px
    --5xl: 6rem; // 96px
    --full: 100%;
}

* {
    box-sizing: border-box;
    outline: none;
  }

  html, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, img, ul, li, ol, a {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
    background: transparent;
  }
`;
