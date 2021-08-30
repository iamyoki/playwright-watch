const getWatchPath = require('../lib/getWatchPath')
const watch = require('../lib/watch')

function execCommand(argv) {
  const { config, commands } = argv

  watch(getWatchPath(config), commands)
}

module.exports = execCommand
