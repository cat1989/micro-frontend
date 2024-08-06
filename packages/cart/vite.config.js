import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src'),
        },
        extensions: [
            ".vue", 
            ".js",
        ],
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/bootstrap'),
            name: 'cart',
        },
    },
})