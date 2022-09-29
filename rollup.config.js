import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import less from 'rollup-plugin-less';
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';

const overrides = {
  compilerOptions: {
    declaration: true,
  },
  exclude: ['src/**/*.test.tsx', 'src/**/*.md'],
};

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    excludeDependenciesFromBundle(),
    typescript({ tsconfigOverride: overrides }),
    less({ output: 'dist/index.css' }),
  ],
};

export default config;
