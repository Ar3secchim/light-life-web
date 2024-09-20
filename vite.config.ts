import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr(),   VitePWA({
    registerType: 'autoUpdate',
  })],
  server: {
    open: true,
    port: 3000,
    //host: 'local.renaradev.com.br',
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src', 'app'),
      '@views': path.resolve(__dirname, 'src', 'views'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
    },
  },
})

