const { cosmiconfigSync } = require('cosmiconfig')
const { search, load } = cosmiconfigSync('playwright')
const { config } = search() || {}

function getWatchPath(configPath) {
  let path = config?.testMatch ?? '**/*.*(test|spec).(js|ts|mjs)'
  if (configPath) {
    path = load(configPath).testMatch
  }

  return path
}

module.exports = getWatchPath
