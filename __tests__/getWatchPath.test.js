const cosmiconfig = require('cosmiconfig')
const getWatchPath = require('../lib/getWatchPath')

const testMatch = '**/*.js'

jest.mock('cosmiconfig', () => {
  return {
    cosmiconfigSync() {
      return {
        search() {
          return {
            config: {
              testMatch,
            },
          }
        },
        load() {
          return {
            testMatch,
          }
        },
      }
    },
  }
})

it('should get path from config', () => {
  expect(getWatchPath()).toBe(testMatch)
})

it('should get path from specific config', () => {
  expect(getWatchPath('somepath')).toBe(testMatch)
})
