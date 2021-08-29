# playwright-watch

![npm](https://img.shields.io/npm/v/playwright-watch)
![npm (tag)](https://img.shields.io/npm/v/playwright-watch/latest)
![NPM](https://img.shields.io/npm/l/playwright-watch)
![GitHub issues](https://img.shields.io/github/issues/iamyoki/playwright-watch)

🙈🐵 Run Playwright in watch mode

## Usage

`npx playwright-watch test`

### **Or you can install locally**

`yarn add playwright-watch -D`

or `npm install playwright-watch --save-dev`

### Add script to your package.json

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

## Author

[Yoki Yu (iamyoki)](https://github.com/iamyoki)
