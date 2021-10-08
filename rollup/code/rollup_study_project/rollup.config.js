/*
 * @author: qiutian
 * @Date: 2021-10-02 09:33:17
 * @Description: Do not edit
 * @params: Do not edit
 */

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel'
import typeScript from '@rollup/plugin-typescript'
import html from '@rollup/plugin-html'

export default {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'esm',
      
    },

    plugins: [
      typeScript,
      html(),
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
    ]
    
  };

