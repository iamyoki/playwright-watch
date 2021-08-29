const watch = require('../lib/watch')
const getWatchPath = require('../lib/getWatchPath')

function defaultCommand(argv) {
  const { _, config } = argv

  watch(getWatchPath(config), ['npx', 'playwright', ..._])
}

module.exports = defaultCommand
