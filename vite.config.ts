/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.lib.json'),
      exclude: [
        '**/*.stories.ts',
        '**/*.stories.tsx',
        '**/__stories__/**'
      ]
    })
  ],

  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js'
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        assetFileNames: '[name][extname]'
      }
    }
  }
});
