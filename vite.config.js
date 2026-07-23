import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base must match the GitHub Pages repo path: https://<user>.github.io/vastu-astro/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/vastu-astro/' : '/',
  plugins: [react(), tailwindcss()],
}))
