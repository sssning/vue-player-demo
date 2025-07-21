import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

import veauryVitePlugins from 'veaury/vite/esm/index.mjs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    vueJsx(),
    vueDevTools(),
    veauryVitePlugins({
      type: 'vue',
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 5000
  }
})
