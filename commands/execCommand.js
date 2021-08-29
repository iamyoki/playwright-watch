const getWatchPath = require('../lib/getWatchPath')
const watch = require('../lib/watch')

function execCommand(argv) {
  const { _, config, commands } = argv

  const parseCommands = commands.split(' ')

  watch(getWatchPath(config), [...parseCommands, ..._.slice(1)])
}

module.exports = execCommand
