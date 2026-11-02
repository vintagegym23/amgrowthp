import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// Lets Cloudflare quick tunnels (random *.trycloudflare.com subdomains) reach the local
// dev and preview servers for client demos. A leading dot allows every subdomain.
const allowedHosts = ['.trycloudflare.com'];

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {allowedHosts},
  preview: {allowedHosts},
});
