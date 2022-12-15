import { join } from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': join(__dirname, 'src'),
            Components: join(__dirname, 'src/Components'),
            Hooks: join(__dirname, 'src/Hooks'),
        },
    },
    server: {
        port: 3000,
    },
});
