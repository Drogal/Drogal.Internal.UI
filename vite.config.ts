/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({

  plugins: [react(), dts({
    tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
    exclude: [
      '**/*.stories.ts',
      '**/*.stories.tsx',
      '**/__stories__/**'
    ]
  })],

  build: {
    cssCodeSplit: false,
    minify: "terser",
    terserOptions: {
      keep_fnames: true,
      compress: {
        keep_fnames: true
      }
    },
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(glob.sync('src/**/*.{ts,tsx}', {
        ignore: ["src/**/*.d.ts"]
      }).map((file: any) => [relative('src', file.slice(0, file.length - extname(file).length)), fileURLToPath(new URL(file, import.meta.url))])),
      output: {
        assetFileNames: '[name][extname]'
      }
    }
  }

});
