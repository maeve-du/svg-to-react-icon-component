import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import { rollupHiConfig, rollupGiConfig } from './constants.js'
// import jsx from 'acorn-jsx'

const config = {
  // ...rollupHiConfig,
  ...rollupGiConfig,
  external: [/@babel\/runtime/, 'react'],
  plugins: [resolve(), babel({ babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'] }), typescript()],
  // acornInjectPlugins: [jsx()],
}

export default config
