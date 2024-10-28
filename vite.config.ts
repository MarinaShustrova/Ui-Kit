import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgrPlugin from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'automatic',
        }),
        dts(),
        tsconfigPaths(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
            },
        }),
    ],
    resolve: {
        alias: [{ find: /^~/, replacement: '' }],
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
            // scss: {
            //     additionalData: `@import "src/styles/variables.scss";`, // если нужно автоматически импортировать переменные
            // },
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.tsx'),
            name: 'ui-kit',
            formats: ['es'],
            fileName: 'index',
        },
        // sourcemap: true, // ✅
        minify: true,
        rollupOptions: {
            external: ['react', 'react-dom'],
        },
    },
})
