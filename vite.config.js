import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // Add other plugins here as needed
  ],
  build: {
    outDir: 'dist', // Specify your output directory here
  },
});
