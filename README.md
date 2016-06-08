# gobble-rollup

Bundle ES6 modules with gobble and [rollup](https://github.com/rich-harris/rollup).

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-rollup
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'src' ).transform( 'rollup', {
  // REQUIRED - the file to start bundling from
  entry: 'app.js',

  // where to write the file to. If omitted,
  // will match the entry module's name
  dest: 'bundle.js',

  // what type of module to create - can be one of
  // 'amd', 'cjs', 'es6', 'iife', 'umd'. Defaults to 'cjs'
  format: 'umd',

  // if generating a 'umd' module, and the entry module
  // (and therefore the bundle) has exports, specify
  // a global name
  moduleName: 'myApp', // becomes `window.myApp`

  // if generated 'amd' or 'umd', you can specify a
  // moduleId which will be used by AMD loaders
  moduleId: 'my-app',

  // set export type explicitly - 'named', 'default' or 'none'.
  // By default this will be set automatically
  exports: 'default',

  // disable caching, in case that's necessary for
  // some reason
  cache: false
});
```

## License

MIT. Copyright 2015 Rich Harris
