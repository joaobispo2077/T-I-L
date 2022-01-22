# Setup lint file that has been changed in commit message moment

Install lint-staged to setup routines to lint staged files:

```bash
yarn add -D lint-staged
```

Create a lint-staged config file called .lintstagedrc.js with content:

```js
module.exports = {
  "(src|tests)/**/*.[jt]s(x)?": ["prettier --write", "eslint --fix"],
};
```

Configure lint-staged script into your package.json:

```json
{
  "scripts": {
    "commit:lint": "lint-staged"
  }
}
```

Install husky to setup hooks to lint staged files:

```bash
yarn add -D husky
yarn husky install
yarn husky add .husky/pre-commit "npm run commit:lint"
```
