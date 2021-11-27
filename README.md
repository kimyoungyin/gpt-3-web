# GPT-3 WebSite from javascript mastery

기존 자바스크립트 기반 강의에 **타입스크립트 + styled-components**를 추가해보았습니다.

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
