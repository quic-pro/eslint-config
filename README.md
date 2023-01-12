# @quic-pro/eslint-config

Shareable ESLint config.

## Installation

> Required ESLint version >= 8

Using npm:

```bash
npm install --save-dev @quic-pro/eslint-config
```

Using yarn:

```bash
yarn add --dev @quic-pro/eslint-config
```

## Configs

Available configs:
- [default](https://github.com/quic-pro/eslint-config/blob/main/index.js)
- [typescript](https://github.com/quic-pro/eslint-config/blob/main/typescript.js)
- [react](https://github.com/quic-pro/eslint-config/blob/main/react.js)

> The default config does not extend typescript and react configs. It is recommended to always use the default config with other configs.

## Usage

### default

1) Add to your ESLint config:

   ```json
   {
     "extends": [
       "@quic-pro/eslint-config"
     ]
   }
   ```

### typescript

1) Install required dependencies:

   > Required versions: <br/>
   typescript >= 4 <br/>
   @typescript-eslint/eslint-plugin >= 5 <br/>
   @typescript-eslint/parser >= 5 <br/>

   Using npm:

   ```bash
   npm install --save-dev typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```

   Using yarn:

   ```bash
   yarn add --dev typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```

2) Add to your ESLint config:

   ```json
   {
     "parser": "@typescript-eslint/parser",
     "parserOptions": {
       "ecmaVersion": "latest",
       "sourceType": "module",
       "project": "./tsconfig.json"
     },
     "extends": [
       "@quic-pro/eslint-config",
       "@quic-pro/eslint-config/typescript"
     ]
   }
   ```

### react

1) Install required dependencies:
   > Required versions: <br/>
   eslint-plugin-react >= 7 <br/>
   eslint-plugin-react-hooks >= 4 <br/>
   eslint-plugin-simple-import-sort >= 8 <br/>

   Using npm:

   ```bash
   npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort
   ```

   Using yarn:

   ```bash
   yarn add --dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort
   ```

2) Add to your ESLint config:

   ```json
   {
     "extends": [
       "@quic-pro/eslint-config",
       "@quic-pro/eslint-config/react"
     ]
   }
   ```

## License

[MIT](LICENSE)
