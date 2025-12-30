import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/minacraft/', // Замініть на назву вашого репозиторію
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild', // Використовуємо esbuild (швидший і вже включений)
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          cannon: ['cannon-es']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true
  }
});

