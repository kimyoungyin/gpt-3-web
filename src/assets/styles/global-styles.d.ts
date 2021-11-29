// src/assets/styles/global-styles.ts
import { createGlobalStyle } from "styled-components";
// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

`;

export default GlobalStyle;
