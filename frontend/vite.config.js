import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/predict": {
        target: "http://localhost:5000",
        changeOrigin: true
      },
      "/api": {
        target: "http://localhost:3503",
        changeOrigin: true
      }
    }
  }
})
