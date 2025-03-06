
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
      fileName: () => `chat-bubble.min.js`,
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      }
    },
  }
});
