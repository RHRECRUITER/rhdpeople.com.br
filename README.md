# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR, using [Biome](https://biomejs.dev) for linting and formatting.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Lint e formatação

O projeto usa [Biome](https://biomejs.dev) como única ferramenta de lint e formatação (substituindo ESLint + Prettier). A configuração fica em [biome.json](biome.json).

```bash
npm run lint        # apenas lint
npm run format      # formata os arquivos
npm run check       # lint + formatação + organização de imports (somente verifica)
npm run check:fix   # aplica todas as correções automáticas
```
