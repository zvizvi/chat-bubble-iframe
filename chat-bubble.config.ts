
import { defineConfig } from "vite";
import path from "path";

// Dedicated configuration for building chat-bubble.js
export default defineConfig({
  build: {
    outDir: 'dist/assets',
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'public/chat-bubble.js'),
      name: 'ChatBubble',
      fileName: (format) => `chat-bubble.${format === 'es' ? 'min' : ''}.js`,
      formats: ['iife', 'es']
    },
    rollupOptions: {
      output: {
        entryFileNames: 'chat-bubble.min.js',
        manualChunks: undefined,
      }
    },
    minify: true,
  }
});
