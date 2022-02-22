setup GRAPHQL

install graphql and requester with cache likes react-query

```bash
yarn add graphql urql
```

install graphql codegen

```bash
yarn add @graphql-codegen/cli @graphql-codegen/import-types-preset  @graphql-codegen/typescript @graphql-codegen/typescript-operations  @graphql-codegen/typescript-urql -D
```

generate codegen with environment variables for graphql to use with types

```json
{
  "scripts": {
    "codegen:graphql": "DOTENV_CONFIG_PATH=./.env.local graphql-codegen -r dotenv/config --config codegen.graphql.yml"
  }
}
```
