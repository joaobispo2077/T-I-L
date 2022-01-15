# Setup commit UI CLI to help team make better commit messages

## https://github.com/commitizen/cz-cli

Install commit CLI helper:

```bash
yarn add -D commitizen
```

With yarn initialize commit CLI:

```bash
yarn commitizen init cz-conventional-changelog --yarn --dev --exact
```

Or with npm init commit CLI:

```bash
commitizen init cz-conventional-changelog --save-dev --save-exact
```

This command with install "cz-conventional-changelog" and add this config into your package json:

```json
{
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```

If you dont like config inside package.json, you can delete this config, and create a .czrc file with config:

```bash
echo '{
  "path": "./node_modules/cz-conventional-changelog"
}' > .czrc
```

Or you can create a .cz.json file:

```bash
echo '{
  "path": "./node_modules/cz-conventional-changelog"
}' > .cz.json
```

Finally, you can add the following to your package.json:

```json
{
  "scripts": {
    "commit": "yarn git-cz"
  }
}
```
