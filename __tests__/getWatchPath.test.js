const cosmiconfig = require('cosmiconfig')
const getWatchPath = require('../lib/getWatchPath')

const testMatch = '**/*.js'

jest.mock('cosmiconfig')

it('get default paths if no config found', () => {
  cosmiconfig.cosmiconfigSync.mockReturnValue({
    search: () => ({}),
    load: () => ({}),
  })
  expect(getWatchPath()).toBe('**/*.*(test|spec).(js|ts|mjs)')

  cosmiconfig.cosmiconfigSync.mockReturnValue({
    search: () => undefined,
    load: () => ({}),
  })
  expect(getWatchPath()).toBe('**/*.*(test|spec).(js|ts|mjs)')
})

it('should get path from specific config', () => {
  cosmiconfig.cosmiconfigSync.mockReturnValue({
    search: () => ({}),
    load: () => ({
      config: {},
    }),
  })
  expect(getWatchPath('someConfigPath')).toBe('**/*.*(test|spec).(js|ts|mjs)')

  cosmiconfig.cosmiconfigSync.mockReturnValue({
    search: () => ({}),
    load: () => ({
      config: {
        testMatch: 'someGlobString',
      },
    }),
  })

  expect(getWatchPath('someConfigPath')).toBe('someGlobString')
})
