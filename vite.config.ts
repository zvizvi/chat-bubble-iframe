
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    {
      name: 'post-build',
      closeBundle: async () => {
        if (mode !== 'development') {
          // Execute the chat-bubble build after the main build
          console.log('Building chat-bubble script...');
          const { build } = await import('vite');
          await build({
            configFile: path.resolve(__dirname, 'chat-bubble.config.ts')
          });
          
          // Copy the source script to dist
          const fs = await import('fs/promises');
          await fs.copyFile(
            path.resolve(__dirname, 'public/chat-bubble.js'), 
            path.resolve(__dirname, 'dist/chat-bubble.js')
          );
          console.log('Chat-bubble script built and copied successfully!');
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
