import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  build: {
    lib: {
      name: 'vue-letter',
      entry: 'src/Letter.vue',
      formats: ['es', 'cjs', 'umd'] as any,
    },
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          return assetInfo.name === 'style.css' ? 'index.css' : assetInfo.name!;
        },
      },
      external: ['vue', 'lettersanitizer'],
    },
  },
  plugins: [
    {
      ...typescript(),
      apply: 'build',
    } as any,
    vue(),
  ],
}));
