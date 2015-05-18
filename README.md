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
  // required - the file to start bundling from
  entry: 'app.js',

  // where to write the file to. If omitted,
  // will match the entry module's name
  dest: 'bundle.js',

  // what type of module to create - can be one of
  // 'amd', 'cjs', 'es6', 'umd'. Defaults to 'cjs'
  format: 'umd',

  // if generating a 'umd' module, and the entry module
  // (and therefore the bundle) has exports, specify
  // a global name
  globalName: 'myApp' // becomes `window.myApp`
});
```

**Note: rollup is in early development, and things will likely change before it becomes suitable for general use.**

## License

MIT. Copyright 2015 Rich Harris
