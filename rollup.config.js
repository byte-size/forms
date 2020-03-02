import vue from "rollup-plugin-vue";
import filesize from "rollup-plugin-filesize";
import buble from "rollup-plugin-buble";
import uglify from "rollup-plugin-uglify-es";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import internal from "rollup-plugin-internal";

export default {
  input: "src/index.js",
  output: {
    file: "dist/tw-ui-form.esm.js",
    format: "es"
  },
  plugins: [
    resolve(),
    commonjs(),
    internal(["form-serialize", "focus-trap", "superstruct"]),
    postcss({
      extract: true
    }),
    vue({ css: false }),
    buble(),
    uglify(),
    filesize()
  ]
};
