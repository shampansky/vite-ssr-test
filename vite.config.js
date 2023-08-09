import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSSR from 'vite-ssr/plugin.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteSSR({
      build: {
        keepIndexHtml: true,
      },
    }),
    vue(),
  ],
  ssr: { format: 'cjs' },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
