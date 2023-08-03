import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import shebang from 'rollup-plugin-preserve-shebang';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';

import pkg from './package.json';

export default [
  {
    input: {
      index: 'src/index.ts',
      cli: 'src/cli.ts'
    },
    external: [
      ...Object.keys(pkg.dependencies ?? {}),
      ...Object.keys(pkg.peerDependencies ?? {})
    ],
    output: {
      dir: 'dist',
      format: 'cjs',
      exports: 'named'
    },
    plugins: [
      del({ targets: 'dist', hook: 'buildStart' }),
      json(),
      nodeResolve({
        preferBuiltins: true
      }),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      shebang(),
      typescript({
        tsconfig: './tsconfig.rollup.json'
      })
    ]
  },
  {
    input: './dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts(), del({ targets: 'dist/types', hook: 'buildEnd' })]
  }
];
