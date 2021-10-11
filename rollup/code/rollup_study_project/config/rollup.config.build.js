/*
 * @author: qiutian
 * @Date: 2021-10-11 11:31:17
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
import { terser } from 'rollup-plugin-terser'


export default {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'esm',
      sourcemap : false
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
      terser()
    ]
    
  };

