import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Disable source maps in production to prevent source code exposure
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-framer': ['framer-motion'],
          'vendor-particles': ['react-particles', 'tsparticles', '@tsparticles/engine'],
          'vendor-icons': ['react-icons', 'lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  // server: {
  //   host: true,          // ⬅️ WAJIB
  //   allowedHosts: 'all', // ⬅️ WAJIB
  // }
})
