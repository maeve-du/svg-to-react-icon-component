import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'

const config = {
  input: 'src/Generated-icon-components/index.ts',
  output: [
    {
      dir: 'packages/gale-icons/dist/hi',
      format: 'esm',
      sourceMap: true,
      preserveModules: true,
      preserveModulesRoot: 'src/Generated-icon-components',
    },
    {
      file: 'packages/gale-icons/dist/hi/index.cjs.js',
      format: 'cjs',
    },
  ],
  external: [/@babel\/runtime/, 'react'],
  plugins: [resolve(), babel({ babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'] }), typescript()],
}

export default config
