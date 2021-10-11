/*
 * @author: qiutian
 * @Date: 2021-10-11 11:30:46
 * @Description: Do not edit
 * @params: Do not edit
 */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typeScript from '@rollup/plugin-typescript';
import html from '@rollup/plugin-html';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image'
// import { terser } from 'rollup-plugin-terser'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'


export default {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'esm',
      sourcemap : true
    },

    plugins: [
      typeScript,
      html(),
      postcss(),
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude:'node_modules/**',
        extensions: ['.ts', '.js'],
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript'
        ]
      }),
      image(),
    //   terser()
    livereload(),
    serve({
        open : true,
        port : 8888,
        contentBase: '',
    })
    ]
    
  };