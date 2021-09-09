const { cosmiconfigSync } = require('cosmiconfig')

function getWatchPath(configPath) {
  const { search, load } = cosmiconfigSync('playwright')
  const { config } = search() || {}

  let path = config?.testMatch ?? '**/*.*(test|spec).(js|ts|mjs)'

  if (configPath) {
    path = load(configPath).config?.testMatch ?? '**/*.*(test|spec).(js|ts|mjs)'
  }

  return path
}

module.exports = getWatchPath
