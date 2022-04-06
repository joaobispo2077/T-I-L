Install plugin:

```bash
npm i babel-plugin-module-resolver -D
```

So, add this config into your babel.config.js:

```js
module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".json", ".ts", ".tsx"],
          alias: {
            "@src": "./src",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@assets": "./src/assets",
          },
        },
      ],
    ],
  };
};
```

And this in your tsconfig.json:

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": "./",
    "paths": {
      "@src/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@screens/*": ["src/screens/*"],
      "@assets/*": ["src/assets/*"]
    }
  }
}
```
