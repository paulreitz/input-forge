import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";

export default defineConfig({
    resolve: {
        alias: {
            'input-forge': resolve(__dirname,'../src/index.ts'),
        }
    },
    plugins: [solidPlugin()],
    server: {
        port: 3000,
    },
    build: {
        target: "esnext",
    },
});
