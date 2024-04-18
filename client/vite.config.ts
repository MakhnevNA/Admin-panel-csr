import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        svgLoader({
            defaultImport: 'component',
            svgo: true,
            svgoConfig: {
                floatPrecision: 3,
                plugins: [
                    {
                        name: 'preset-default',
                        params: {
                            overrides: {
                                cleanupIds: false,
                            },
                        },
                    },
                ],
            },
        }),
    ],
    server: {
        hmr: true,
        proxy: {
            '/api': {
                target: 'http://localhost:5000/',
                secure: false,
                changeOrigin: true,
            },
        },
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: fileURLToPath(new URL('./src', import.meta.url)),
            },
        ],
    },
});
