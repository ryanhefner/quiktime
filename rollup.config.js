import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const config = {
  input: 'src/index.js',
  output: {
    name: pkg.name,
    file: './index.js',
    exports: 'named',
    format: 'umd',
    globals: {},
    banner: `/*! quicktime - Quickly format duration values in a condensed format. !*/`,
    footer: '/* MIT License - Copyright 2022 - Follow me on Twitter: @ryanhefner */',
  },
  external: [],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    json(),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(terser());
}

export default config;
