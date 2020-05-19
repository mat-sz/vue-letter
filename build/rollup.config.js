import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import buble from '@rollup/plugin-buble';
import resolve from '@rollup/plugin-node-resolve';
import ignore from 'rollup-plugin-ignore';

export default {
  input: 'src/wrapper.js',
  output: {
    name: 'Letter',
    exports: 'named',
  },
  plugins: [
    ignore('react'),
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
    }),
    resolve(),
    buble(),
  ],
};
