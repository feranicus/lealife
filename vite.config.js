import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// base: './' makes the build work both on GitHub Pages (project sub-path)
// and when opened directly from a file (file://) on a phone.
// viteSingleFile inlines all JS/CSS into one index.html so it opens with no server.
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
  },
})
