import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps every asset path relative, so the build works at any URL.
export default defineConfig({
    base: './',
    plugins: [react()],
});
