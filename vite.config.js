import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 跨域：http://localhost:3000/ 本地请求，首先找到/api开头的，/api会拼到/api/auth/admin/login前面变成 /api/api/auth/admin/login，
  // 然后转到 target: 'http://vue.itlike.com:5000',变成http://vue.itlike.com:5000/api/api/auth/admin/login
  // 多出来/api，在下面rewrite重写用''去掉/api，最终变成http://vue.itlike.com:5000/api/auth/admin/login请求成功
  server:{
    proxy: {
      '/api': {
        target: 'http://vue.itlike.com:5000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
