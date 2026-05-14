import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Use polling to avoid OneDrive/Windows file-watcher conflicts
      usePolling: true,
      interval: 1000,
    },
  },
})
