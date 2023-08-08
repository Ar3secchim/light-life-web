import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [react(), VitePWA({ registerType: 'autoUpdate',
    manifest:{
      icons:[
        {
          src: "/public/favicon.ico",
          sizes: "64x64 32x32 24x24 16x16",
          type: "image/x-icon"
        },
        {
          src: "/public/LogoVector.png",
          type: "image/png",
          sizes: "192x192"
        },
        {
          src: "/public/LogoVector512.png",
          type: "image/png",
          sizes: "512x512"
        }
      ]
    }
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
