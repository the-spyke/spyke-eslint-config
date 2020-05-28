# @spyke/eslint-config

A stricter version of the Recommended ESLint config + Imports plugin. Most rules are turned on. Some sane JavaScript'ish formatting is enforced.

## Installation

This config is made for `eslint@7` and `eslint-plugin-import@2`. Please intall them first:

```sh
npm install --save-dev eslint@7 eslint-plugin-import@2
# or
yarn add --dev eslint@7 eslint-plugin-import@2
```

Now install the config:

```sh
npm install --save-dev @spyke/eslint-config
# or
yarn add --dev @spyke/eslint-config
```

## Usage

Create your own root config (in this case `.eslintrc.cjs`, but `.js` or `.json` will work fine too):

```js
"use strict";

module.exports = {
    env: {
        es2020: true,
    },
    extends: [
        "@spyke/eslint-config"
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module"
    },
    root: true,
}
```

Feel free add your own rules there: they will override ones from this config.

You can also extend individual configs like `@spyke/eslint-config/base` and `@spyke/eslint-config/import` if you want to reuse them separately.

## License

Licensed under the MIT License, see [LICENSE](LICENSE) for more information.
