import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [
        vue({
            // template: {
            //     compilerOptions: {
            //         isCustomElement: (tag) => /micro-app/.test(tag),
            //     },
            // },
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src'),
        },
        extensions: [
            ".vue", ".js",
        ],
    },
})
