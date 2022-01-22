# Setup linters in Node.js

.editorconfig:

```txt
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

Eslint and prettier intallation:

```bash
yarn add -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript
```

Great prettier config:

```js
module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  endOfLine: "auto",
};
```

Great eslint config:

```js
module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "import"],
  ignorePatterns: ["node_modules", "/*.js", "dist"],
  rules: {
    camelcase: "error",
    "prettier/prettier": "error",
    "no-console": "error",
    "import/no-unresolved": "error",
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "lines-between-class-members": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["external", ["parent", "sibling", "index"]],
        pathGroups: [
          {
            pattern: "/^@/",
            group: "external",
          },
        ],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
```

Finally, add commands into your package.json file to run linters:

```json
{
  "scripts": {
    "lint": "yarn lint:check && yarn style:check ",
    "lint:check": "eslint ./src ./test --ext .ts",
    "lint:fix": "eslint ./src ./test --ext .ts --fix",
    "style:check": "prettier --check ./src/**/*.ts ./test/**/*.ts",
    "style:fix": "prettier --write src/**/*.ts test/**/*.ts"
  }
}
```
