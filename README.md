# Description

- QC 실사 검증 프로그램
- Typescript를 이용한 React.js 프론트엔드 개발환경 셋업
- 디렉터리 구조:

```
├── build // 빌드 파일
├── node_modules
├── public
├── src
│   ├── app // Redux 관련
│   │   ├── hooks.ts
│   │   └── store.ts
│   ├── assets // 정적 자원
│   │   ├── styles
│   │   └── svgs
│   ├── feature
│   │   ├── navigation
│   │   └── counter // Redux 예제
│   ├── pages
│   │   ├── test-csr
│   │   └── test-lifecycle
│   ├── App.tsx
│   └── index.tsx
├── .gitignore // git commit 금지 목록
├── package-lock.json // 설치된 모듈 정보
├── package.json // 프로젝트 설정
├── README.md
└── tsconfig.json // typescript 설정
```

# Available Scripts

### Installation

```
npm install
```

### Running

```
npm run dev // develop mode
```

- [http://localhost:3000](http://localhost:3000)

### Build

```
npm run build
```

- information: [deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Test

```
npm test
```

- use Jest
- information: [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

### eject

```
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Environment Setting

### NVM (for Windows):

- https://github.com/coreybutler/nvm-windows

### Node.js:

```
nvm install (version) // 최신 버전 or lts 버전 or 특정 버전
nvm ls // 설치된 node.js 목록 확인
nvm use (version) // 특정 버전의 node.js 사용하기
nvm current // 현재 사용중인 node.js 버전 확인
```

### Typescript:

```
npm install -g typescript
```

### VSCode:

- https://code.visualstudio.com/

### ESLint Extension

- file > preferences > setting > editor code > code actions on save > edit in setting json

```
"editor.codeActionsOnSave" {
  "source.fixAll.eslint": true
}
```

### Prettier Extension

- file > preferences > setting > fomatter > Default Fommatter를 Prettier로, Format On Save 활성

# Project Setting

### CRA boilerplate

```
npx create-react-app qc-project-web --template redux-typescript
```

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)

### React-Router

```
npm install react-router react-router-dom
npm install -D @types/react-router @types/react-router-dom
```

### React-Bootstrap

```
npm install react-bootstrap bootstrap
npm install -S react-router-bootstrap
npm install -D @types/react-router-bootstrap
```

- [React-Bootstrap](https://react-bootstrap.netlify.app/)
- [React-Router-Bootstrap](https://github.com/react-bootstrap/react-router-bootstrap)
- [Bootstrap](https://getbootstrap.kr/)

### .gitignore

```
/* gitignore */

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```
