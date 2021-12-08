<h1 align="center">playwright-watch</h1>

<div align="center">
  <a href="https://www.npmjs.com/package/playwright-watch">
    <img src="https://img.shields.io/npm/v/playwright-watch" alt="npm">
  </a>

  <a href="https://www.npmjs.com/package/playwright-watch">
    <img src="https://img.shields.io/npm/v/playwright-watch/latest" alt="npm">
  </a>

  <a href="https://github.com/iamyoki/playwright-watch">
    <img src="https://img.shields.io/npm/l/playwright-watch" alt="github">
  </a>

  <a href="https://github.com/iamyoki/playwright-watch">
    <img src="https://img.shields.io/github/issues/iamyoki/playwright-watch" alt="github issues">
  </a>

  <br>

  <a href="https://app.travis-ci.com/github/iamyoki/playwright-watch">
    <img src="https://app.travis-ci.com/iamyoki/playwright-watch.svg" alt="build">
  </a>

  <a href="https://github.com/iamyoki/playwright-watch/actions/workflows/testing.yml">
    <img alt="GitHub Testing Status" src="https://github.com/iamyoki/playwright-watch/actions/workflows/testing.yml/badge.svg">
  </a>

  <a href="https://codecov.io/gh/iamyoki/playwright-watch">
    <img src="https://codecov.io/gh/iamyoki/playwright-watch/branch/main/graph/badge.svg?token=RD13S01FD1"/>
  </a>
    
</div>

<br>
<br>

<p align="center">
  <code>playwright</code>
  <code>+</code>
  <code>watch</code>
  <code>=</code>
  <code>playwright-watch</code>
</p>
<p align="center">🙈🐵 Run Playwright in watch mode</p>

<br>

## Usage

use exactly the same as Playwright, only in watch mode
```bash
npx playwright-watch test
```

> Note: There is a peer dependency on `playwright`.

### Or you can install locally

```bash
yarn add playwright-watch -D

#or

npm install playwright-watch --save-dev
```

Add script to your package.json

```json
{
  "test:watch": "playwright-watch test"
}
```

or

```json
{
  "test": "playwright test",
  "test:watch": "playwright-watch exec yarn test"
}
```

## CLI Details

run `npx playwright-watch --help` to see more details.

```bash
🙈 playwright-watch

🐵 Run Playwright in watch mode

Commands:
  playwright-watch <commands..>       Use the same as Playwright but under watch
                                      (e.g. playwright-watch test)     [default]
  playwright-watch exec <commands..>  Run commands when changes are detected
                                      (e.g. playwright-watch exec yarn test)

Options:
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]
  -c, --config   Configuration file of Playwright (default:
                 playwright.config.js), the `testMatch` prop will be watch path
                 (default: `.*(test|spec).(js|ts|mjs)`).

Examples:
  playwright-watch test
  playwright-watch test --config tests/playwright.config.js

  playwright-watch exec yarn playwright test
  playwright-watch exec yarn run test:e2e
  playwright-watch exec echo changed
```

## Author

[Yoki Yu (iamyoki)](https://github.com/iamyoki)
