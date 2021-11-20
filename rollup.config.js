import typescript from "rollup-plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";
import pkg from './package.json';

// 为了将引入的 npm 包，也打包进最终结果中
import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'; // 将非es6代码转换为es6代码


export default {
    input: "./src/main.ts",
    plugins: [
        typescript({
          exclude: "node_modules/**",
          typescript: require("typescript")
        }),
        sourceMaps(),
        commonjs(),
        resolve()
    ],
    output: [
      {
        format: "cjs",
        file: "lib/bundle.cjs.js"
      },
      {
        format: "es",
        file: "lib/bundle.esm.js"
      }
    ]
}