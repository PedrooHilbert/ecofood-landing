import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Caminhos relativos no build → o dist/ pode ser servido de qualquer caminho
  // (raiz ou subpasta), por ex. com `npm run preview`.
  base: './',
})
