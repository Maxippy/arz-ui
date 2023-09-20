import { defineConfig } from 'vite'
// 引入markdown
import Markdown from 'vite-plugin-md'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 引入vue和markdown插件
  plugins: [vue(
    {
    include: [/\.md$/, /\.vue$/]
  }
  ), Markdown()],
  build: {
    // 忽略不需要的包  这里指vue
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      } 
    },
    lib: {
      entry: 'packages/index.ts',
      name: 'arz-ui'
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'packages': resolve(__dirname, './packages')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/assets/styles/style.scss" as *;`
      }
    }
  }
})
