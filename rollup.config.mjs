import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

import { DEFAULT_EXTENSIONS } from '@babel/core';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: 'dist/esm/index.esm.js',
        format: 'esm',
        exports: 'named',
        sourcemap: false,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript(),
      babel({
        extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
        exclude: [
          'node_modules/**',
          '**/*.spec.tsx',
          '**/*.spec.ts',
          '**/*.stories.tsx',
          '.vscode',
          '.storybook',
        ],
        presets: ['@babel/preset-react'],
      }),
      terser(),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
