import vue from 'rollup-plugin-vue'
import filesize from 'rollup-plugin-filesize'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import internal from 'rollup-plugin-internal'

export default {
  input: {
    index: 'src/index.js',
    input: 'src/Input.Container.vue'
  },
  output: [
    {
      dir: 'dist/esm',
      format: 'esm'
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'default'
    }
  ],
  plugins: [vue(), postcss({ extract: true }), babel(), resolve(), commonjs(),internal(['form-serialize', 'focus-trap', 'superstruct', 'v-click-outside']), terser(), filesize()],
  external: ['vue']
}