import { nodeResolve } from '@rollup/plugin-node-resolve'

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'src/bin/playwright-watch.js',
  output: {
    file: 'dist/playwright-watch.js',
    format: 'cjs',
  },
  plugins: [nodeResolve()],
}

export default config
