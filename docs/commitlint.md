# Setup commit lint

## https://www.conventionalcommits.org/en/v1.0.0/

Install commitlint tools:

```bash
yarn add -D @commitlint/cli @commitlint/config-conventional
```

Create commit lint config file called `.commitlintrc.js`:

```bash
 echo 'module.exports = { extends: ['@commitlint/config-conventional'] };' > .commitlintrc.js
```

Install githooks tool:

```bash
yarn add -D husky

yarn husky install
```

Prepare commit lint hook:

```bash
yarn husky add .husky/commit-msg 'yarn commitlint --edit "$1"'
```

Examples:

- https://github.com/joaobispo2077/clean-notepad-api/commit/b13435eaa144936aeecad4473f71c47831c2800c
