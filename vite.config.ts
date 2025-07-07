import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Generate build version and timestamp
const buildVersion = Date.now().toString();
const buildTimestamp = new Date().toISOString();

// Plugin to inject build info into HTML
const injectBuildInfo = () => {
  return {
    name: 'inject-build-info',
    transformIndexHtml(html: string) {
      return html
        .replace('__BUILD_VERSION__', buildVersion)
        .replace('__BUILD_TIMESTAMP__', buildTimestamp);
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), injectBuildInfo()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Enable code splitting with cache-busting
    rollupOptions: {
      output: {
        // Add hash to filenames for cache busting
        entryFileNames: `assets/[name]-[hash]-${buildVersion}.js`,
        chunkFileNames: `assets/[name]-[hash]-${buildVersion}.js`,
        assetFileNames: `assets/[name]-[hash]-${buildVersion}.[ext]`,
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Force new build artifacts
    sourcemap: false,
    // Ensure assets are always fresh
    assetsInlineLimit: 0
  },
  // Enable compression
  server: {
    compress: true
  },
  // Preload critical resources
  assetsInclude: ['**/*.webp']
});
