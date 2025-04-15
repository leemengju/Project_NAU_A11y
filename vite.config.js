import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.JPG'],// 讓vite支援靜態圖片
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // base: '/Project_NAU_A11y/',
})
