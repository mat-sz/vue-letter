import { defineConfig } from 'vite';
import typescript2 from 'rollup-plugin-typescript2';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  build: {
    lib: {
      name: 'vue-letter',
      entry: 'src/main.ts',
      formats: ['es', 'cjs', 'umd'] as any,
    },
    rollupOptions: {
      output: {
        exports: 'named' as any,
        globals: {
          vue: 'Vue',
        },
      },
      external: ['vue'],
    },
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ['src/**/*.vue'],
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'dist',
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ['vite.config.ts'],
    }),
  ],
}));
