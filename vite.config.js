const path = require('path');
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  define: {
    'process.env': {},  // 为空对象，避免 ReferenceError 错误
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  build: {
    //压缩
    minify: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'UseAnimations',
      fileName: (format) => `use-animations.${format}.js`,
      // formats: ['es', 'umd']
    }
  },
})
