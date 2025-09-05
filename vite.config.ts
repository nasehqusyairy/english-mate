import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(),
  VitePWA({
    registerType: 'autoUpdate',
    manifest: false, // pakai manifest.json dari public/
    includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
  }),
  ],
  server: {
    host: '0.0.0.0'
  }
});
