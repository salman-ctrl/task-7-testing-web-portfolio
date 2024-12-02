![Gambar WhatsApp 2024-12-02 pukul 21 13 49_11e9a36e](https://github.com/user-attachments/assets/6c063cd1-f3dd-4cab-8503-f39b1e3390d1)# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

> my-portfolio@0.0.0 build
> tsc -b && vite build

vite v5.4.11 building for production...
✓ 1600 modules transformed.
dist/index.html                        0.48 kB │ gzip:  0.31 kB
dist/assets/background-8tkquTLi.jpg   29.12 kB
dist/assets/logo-Dc4_sd_s.png         70.90 kB
dist/assets/foto ku-CUOBc0bw.png     210.87 kB
dist/assets/index-DWXlO3yL.css        15.27 kB │ gzip:  3.80 kB
dist/assets/index-OMrUVQ43.js        231.75 kB │ gzip: 74.60 kB
✓ built in 14.46s


- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
