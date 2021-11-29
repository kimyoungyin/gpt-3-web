# GPT-3 WebSite from javascript mastery

기존 자바스크립트 기반 강의에 **타입스크립트 + styled-components**를 추가해보았습니다.

---

## file/folder structure

1. import 문 단축하기: export를 한 곳에 모아 default as 처리

```tsx
// src/components/index.tsx
export { default as Article } from "./article/Article";
export { default as Brand } from "./brand/Brand";
export { default as CTA } from "./cta/CTA";
export { default as Feature } from "./feature/Feature";
export { default as NavBar } from "./navbar/NavBar";
```

```tsx
// src/App.tsx
import { Brand, CTA, NavBar } from "./components";
```

---

## css structure

1. styled-components: `createGlobalStyle` 내부 css에 prettier 적용 안될 때: css function으로 묶어주자

```ts
import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`${css`
    @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
    }

    body {
        background-color: ${(props) => props.theme.color_bg};
    }

    a {
        color: unset;
        text-decoration: none;
    }
`}`;

export default GlobalStyle;
```

2. 유용한 css 사이트 모음

    - gradient 생성기: [https://angrytools.com/gradient/](https://angrytools.com/gradient/)
    - animation 생성기: [https://animista.net/](https://animista.net/)
