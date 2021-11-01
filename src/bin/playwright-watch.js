#! /usr/bin/env node

const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const defaultCommand = require('../commands/defaultCommand')
const execCommand = require('../commands/execCommand')

// eslint-disable-next-line no-unused-expressions
yargs(hideBin(process.argv))
  .usage('🙈 $0 \n\n 🐵 Run Playwright in watch mode')
  .command(
    '$0 <commands..>',
    'Use the same as Playwright but under watch \n(e.g. playwright-watch test)',
    {
      config: {
        alias: 'c',
        desc: 'Configuration file of Playwright (default: playwright.config.js), the `testMatch` prop will be watch path (default: `.*(test|spec).(js|ts|mjs)`).',
      },
    },
    defaultCommand
  )
  .command(
    'exec <commands..>',
    'Run commands when changes are detected \n(e.g. playwright-watch exec yarn test)',
    {
      config: {
        alias: 'c',
        desc: 'Configuration file of Playwright (default: playwright.config.js), the `testMatch` prop will be watch path (default: `*.(test|spec).(js|ts|mjs)`).',
      },
    },
    execCommand
  )
  .example([
    ['$0 test'],
    ['$0 test --config tests/playwright.config.js'],
    [''],
    ['$0 exec yarn playwright test'],
    ['$0 exec yarn run test:e2e'],
    ['$0 exec echo changed'],
  ])
  .alias('help', 'h')
  .alias('version', 'v').argv
