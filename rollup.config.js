import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import { dts } from 'rollup-plugin-dts'
import { rollupHiConfig, rollupGiConfig, dtsGiConfig, dtsHiConfig } from './constants.js'
// import jsx from 'acorn-jsx'

const config = {
  // ...rollupHiConfig,
  // ...dtsHiConfig,
  // ...rollupGiConfig,
  ...dtsGiConfig,
  external: [/@babel\/runtime/, 'react'],
  plugins: [
    resolve(),
    babel({ babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'] }),
    typescript(),
    dts(),
  ],
  // acornInjectPlugins: [jsx()],
}

export default config
