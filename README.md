# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```
issues-viewer-board
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ App.tsx
│  │  ├─ middleware
│  │  │  └─ middlewareListener.ts
│  │  └─ store.ts
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ Search.tsx
│  │  └─ StrictModeDroppable.tsx
│  ├─ features
│  │  ├─ issues
│  │  │  ├─ issueSlice.ts
│  │  │  ├─ issueThunks.ts
│  │  │  ├─ types.ts
│  │  │  └─ ui
│  │  │     ├─ IssueBoard.tsx
│  │  │     ├─ IssueItem.tsx
│  │  │     └─ IssuesList.tsx
│  │  └─ repo
│  │     ├─ lib.ts
│  │     ├─ repoSlice.ts
│  │     ├─ repoThunks.ts
│  │     ├─ types.ts
│  │     └─ ui
│  │        └─ RepositoryDetails.tsx
│  ├─ index.css
│  ├─ main.tsx
│  ├─ utils
│  │  └─ localStorage.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```