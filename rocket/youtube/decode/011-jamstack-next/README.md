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

# setup TAILWIND

install

```bash
yarn add tailwindcss postcss autoprefixer -D
```

initialize with

```bash
yarn tailwindcss init -p
```

you can use aditional plugins

```bash
yarn add @tailwindcss/forms @tailwindcss/typography -D
```

if u wanna use icons, you can install:

```bash
yarn add @heroicons/react
```

if u wanna use custom feats, you can install:

```
yarn add @headlessui/react
```

add in global.css file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
