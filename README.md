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

- [default](https://github.com/quic-pro/eslint-config/blob/main/index.js) same as recommended
- [recommended](https://github.com/quic-pro/eslint-config/blob/main/recommended.js)
- [typescript](https://github.com/quic-pro/eslint-config/blob/main/typescript.js)
- [react](https://github.com/quic-pro/eslint-config/blob/main/react.js)

> Use the recommended config with other configs.

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

   Or you can also omit the eslint-config and it will be automatically assumed by ESLint:

   ```json
   {
     "extends": [
       "@quic-pro"
     ]
   }
   ```

### recommended

1) Add to your ESLint config:

   ```json
   {
     "extends": [
       "@quic-pro/eslint-config/recommended"
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
       "@quic-pro/eslint-config/recommended",
       "@quic-pro/eslint-config/typescript"
     ]
   }
   ```

### react

1) Install required dependencies:
   > Required versions: <br/>
   eslint-config-react-app >= 7 <br/>
   eslint-plugin-react >= 7 <br/>
   eslint-plugin-react-hooks >= 4 <br/>
   eslint-plugin-simple-import-sort >= 8 <br/>

   Using npm:

   ```bash
   npm install --save-dev eslint-config-react-app eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort
   ```

   Using yarn:

   ```bash
   yarn add --dev eslint-config-react-app eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort
   ```

2) Add to your ESLint config:

   ```json
   {
     "extends": [
       "@quic-pro/eslint-config/recommended",
       "@quic-pro/eslint-config/react"
     ]
   }
   ```

   > If you are using TypeScript with React then you can also add "@quic-pro/eslint-config/typescript"

## License

[MIT](LICENSE)
