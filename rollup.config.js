import { nodeResolve } from '@rollup/plugin-node-resolve'
import shebang from 'rollup-plugin-preserve-shebang'

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'src/bin/playwright-watch.js',
  output: {
    file: 'dist/playwright-watch.js',
    format: 'cjs',
  },
  plugins: [nodeResolve(), shebang()],
}

export default config
