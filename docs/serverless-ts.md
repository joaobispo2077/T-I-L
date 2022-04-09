Initiate from template:

```bash
 serverless create --template aws-nodejs-typescrip
```

Install serverless-offline and serverless-webpack plugin:

```bash
npm install serverless-offline serverless-webpack
```

Remove serverless.ts and use a serverless.yml

```yaml
org: company_name
app: app_name
service: app_name
frameworkVersion: "3"

provider:
  name: aws
  runtime: nodejs14.x

  versionFunctions: false
  stage: ${opt:stage, 'dev'}
  region: ${opt:region, 'eu-west-1'}

  stackTags:
    owner: your_name
    service: app_name
    stage: ${self:provider.stage}
    client: company_name

plugins:
  - serverless-webpack
  - serverless-offline

custom:
  webpack:
    webpackConfig: ./webpack.config.js
    includeModules: false
    packager: "npm"

  serverless-offline:
    httpPort: 4000

package:
  exclude:
    - node_modules/**

functions:
  hello:
    handler: src/controllers/hello/index.hello
    events:
      - httpApi:
          path: /
          method: get
```

Exchange your dev dependencies from:

```json
{
  "devDependencies": {
    "@serverless/typescript": "^3.0.0",
    "@types/aws-lambda": "^8.10.71",
    "@types/node": "^14.14.25",
    "esbuild": "^0.14.11",
    "json-schema-to-ts": "^1.5.0",
    "serverless": "^3.0.0",
    "serverless-esbuild": "^1.23.3",
    "ts-node": "^10.4.0",
    "tsconfig-paths": "^3.9.0",
    "typescript": "^4.1.3"
  }
}
```

by something like:

```json
{
  "devDependencies": {
    "@types/aws-lambda": "^8.10.93",
    "@types/node": "^17.0.21",
    "serverless": "^3.7.1",
    "serverless-offline": "^8.5.0",
    "serverless-webpack": "^5.6.1",
    "ts-loader": "^9.2.7",
    "ts-node": "^10.4.0",
    "tsconfig-paths": "^3.13.0",
    "tsconfig-paths-webpack-plugin": "^3.5.2",
    "typescript": "^4.6.2",
    "webpack-node-externals": "^3.0.0"
  }
}
```

Create your webpack config file:

```js
const path = require("path");
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

/*
This line is only required if you are specifying `TS_NODE_PROJECT` for whatever reason.
 */
// delete process.env.TS_NODE_PROJECT;

module.exports = {
  context: __dirname,
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  devtool: slsw.lib.webpack.isLocal
    ? "eval-cheap-module-source-map"
    : "source-map",
  resolve: {
    extensions: [".mjs", ".json", ".ts"],
    symlinks: false,
    cacheWithContext: false,
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.paths.json",
      }),
    ],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  optimization: {
    concatenateModules: false,
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(ts?)$/,
        loader: "ts-loader",
        exclude: [
          [
            path.resolve(__dirname, "node_modules"),
            path.resolve(__dirname, ".serverless"),
            path.resolve(__dirname, ".webpack"),
          ],
        ],
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
    ],
  },
  plugins: [],
};
```

Finally have certain that your tsconfig.paths.json file is correct:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@src/*": ["src/*"]
    }
  }
}
```

And tsconfig.json:

```json
{
  "compilerOptions": {
    "target": "es2019",
    "moduleResolution": "node",
    "module": "commonjs",
    "lib": ["es2019"],
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "resolveJsonModule": true,
    "alwaysStrict": true,
    "removeComments": true,
    "noImplicitReturns": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@src/*": ["src/*"]
    },
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src"],
  "exclude": ["node_modules", ".serverless", ".webpack", "_warmup", ".vscode"],
  "extends": "./tsconfig.paths.json",
  "ts-node": {
    "require": ["tsconfig-paths/register"]
  }
}
```
