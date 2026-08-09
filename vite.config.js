import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Deployed to https://Pramodpulicherla-279.github.io/portfolio-design/
export default defineConfig({
  base: '/portfolio-design/',
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});
