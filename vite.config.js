import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"react-57-vite-pizzeria-online-ordering-system",
  plugins: [react()],
})
