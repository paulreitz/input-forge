import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';

const getBase = () => {
  if (process.env.NODE_ENV === 'development') return '/';
  return `/${
    process.env.GITHUB_REPOSITORY?.split('/')[1] || 'input-forge'
  }/`;
};

export default defineConfig({
    resolve: {
        alias: {
            'input-forge': resolve(__dirname,'../src/index.ts'),
        }
    },
    plugins: [solidPlugin()],
    base: getBase(),
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
});
