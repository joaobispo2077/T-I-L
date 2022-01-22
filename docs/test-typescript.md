# Setup jest with typescript

Install jest and ts-jest:

```bash
yarn add -D jest ts-jest
```

Generate jest config file with ts-jest

```bash
npx ts-jest config:init
```

The file is something like:

```js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
```

You can customize this file and finish with something like this:

```js
const { resolve } = require("path");

const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

const root = resolve(__dirname);

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: root,
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  displayName: "root-tests",
  testMatch: ["<rootDir>/tests/**/*.spec.ts"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  collectCoverage: false,
  coverageProvider: "v8",
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
};
```
