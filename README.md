# 📝 Todo List App (React + TypeScript + Vite)

A modern and modular **To-do List** application built using **React**, **TypeScript**, and **Vite**. The app supports **pagination**, **virtualized rendering**, **drag and drop**, **responsive UI**, and **form validation** — perfect for scalable, real-world use cases.

---


## 🚀 Get Started

> Follow these simple steps to run the project locally.

### 1. Clone the repository

```bash
git clone <repo url>
cd todo-list-app-react
npm i
npm run dev

## ⚙️ Tech Stack

-  **React 18**
- **Vite** – blazing fast build tool
- **Redux Toolkit** for global state
- **TypeScript** for static type safety
- **MUI (Material UI)** for UI components
- **styled-components** for custom styling
- **Jest** + **Testing Library** (optional)
- **ESLint** + **Prettier** for code linting and formatting

## 🏛️ Architecture Overview

src/
├── components/ # Reusable UI components
├── pages/ # Page-level components (e.g., Dashboard)
├── store/ # Redux store slices & configuration
├── styles/ # Global and shared styles
├── types/ # TypeScript interfaces and types
├── utils/ # Constants, helpers
└── main.tsx # Entry point

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```


#Commit Standard

feat:     New feature

fix:      Bug fix

docs:     Documentation changes // readme ...

style:    Changes affets for style

chore:    Other changes including config

test:     Adding/modify test cases
