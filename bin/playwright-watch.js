#! /usr/bin/env node

const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const defaultCommand = require('../commands/defaultCommand')
const execCommand = require('../commands/execCommand')

yargs(hideBin(process.argv))
  .usage('🙈 $0 \n')
  .command(
    '$0',
    'Run Playwright in watch mode',
    {
      config: {
        alias: 'c',
        desc: 'Configuration file of playwright (default: playwright.config.js), the `testMatch` prop will be watch path (default: `.*(test|spec).(js|ts|mjs)`).'
      }
    },
    defaultCommand
  )
  .command(
    'exec <commands>',
    'Run command when changes are detected \n(e.g. playwright-watch exec yarn test)',
    {},
    execCommand
  )
  .option('config', {
    alias: 'c',
    desc: 'Configuration file of playwright (default: playwright.config.js), the `testMatch` prop will be watch path (default: `.*(test|spec).(js|ts|mjs)`).'
  })
  .alias('help', 'h')
  .alias('version', 'v').argv
