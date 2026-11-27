import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/dashboard-egresos-salud-mental-gye/',
  plugins: [react()],
})