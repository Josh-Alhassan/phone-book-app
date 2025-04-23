import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Required for Gitpod port forwarding
    port: 5174,
    strictPort: true,
    allowedHosts: [
      // Allow all Gitpod workspaces
      '.gitpod.io',
      '.ws-eu118.gitpod.io',
      // Add your specific workspace if needed
      '5173-joshalhassa-phonebookap-5rcrug5d3qz.ws-eu118.gitpod.io'
    ]
  }
})
