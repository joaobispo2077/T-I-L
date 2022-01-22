# Setup typescript

Install typescript:

```bash
yarn add -D typescript
```

Initialize typescript:

```bash
yarn tsc --init
```

This command will generate the file tsconfig.json:

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "allowJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

Add your preferences into tsconfig.json, to know more about this file visit: https://aka.ms/tsconfig.json.

This initial file soounds great, but you can use this poweerful config in your typescript:

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
      "@src/*": ["src/*"],
      "@tests/*": ["tests/*"]
    },
    "rootDirs": ["./src", "./tests"],
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src"],
  "exclude": ["./node_modules/*", "dist"]
}
```

Examples:

- https://github.com/joaobispo2077/clean-notepad-api/commit/11b4a90975a2891ebaa7b7feefb97b567d3fefff
