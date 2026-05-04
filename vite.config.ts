import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const REPO_BASE = '/SIEEP-landing/';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? REPO_BASE : '/',
  server: { port: 5173, host: true },
}));
