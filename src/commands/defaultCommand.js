const watch = require('../lib/watch')
const getWatchPath = require('../lib/getWatchPath')

function defaultCommand(argv) {
  const { commands, config } = argv;
  if (config) {
    commands.push(`-c${config}`);
  }
  watch(getWatchPath(config), ['npx', 'playwright', ...commands])
}

module.exports = defaultCommand
