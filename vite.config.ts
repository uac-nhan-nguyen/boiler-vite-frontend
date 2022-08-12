import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: 'env',
  resolve: {
    alias: {
      components: 'src/components',
      common: 'src/common',
      api: 'src/api',
      hooks: 'src/hooks',
    }
  },
})
