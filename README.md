# clsq

> A tiny utility for constructing Qwik `class` strings conditionally.

This module is available in two formats:

- **ES Module**: `dist/esm/index.js`
- **CommonJS**: `dist/cjs/index.js`

## Install

```
$ npm i -D https://github.com/limjiechao/clsq/archive/refs/tags/2023-09-12.tar.gz
```

## Usage

```js
import clsq from 'clsq';
// or
import { clsq } from 'clsq';

// Strings (variadic)
clsq('foo', true && 'bar', 'baz');
//=> 'foo bar baz'

// Objects
clsq({ foo: true, bar: false, baz: isTrue() });
//=> 'foo baz'

// Objects (variadic)
clsq({ foo: true }, { bar: false }, null, { '--foobar': 'hello' });
//=> 'foo --foobar'

// Arrays
clsq(['foo', 0, false, 'bar']);
//=> 'foo bar'

// Arrays (variadic)
clsq(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]);
//=> 'foo bar baz hello there'

// Kitchen sink (with nesting)
clsq(
  'foo',
  [1 && 'bar', { baz: false, bat: null }, ['hello', ['world']]],
  'cya'
);
//=> 'foo bar hello world cya'
```

## API

### clsq(...input)

Returns: `String`

#### input

Type: `Mixed`

The `clsq` function can take **_any_** number of arguments, each of which can be
an Object, Array, Boolean, or String.

> **Important:** _Any_ falsey values are discarded!<br>Standalone Boolean values
> are discarded as well.

```js
clsq(true, false, '', null, undefined, 0, NaN);
//=> ''
```

## Support

All versions of Node.js are supported.

All browsers that support
[`Array.isArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Browser_compatibility)
are supported (IE9+).

## Tailwind Support

Here some additional (optional) steps to enable classes autocompletion using
`clsq` with Tailwind CSS.

<details>

<summary>
  Visual Studio Code
</summary>

1. [Install the "Tailwind CSS IntelliSense" Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

2. Add the following to your
   [`settings.json`](https://code.visualstudio.com/docs/getstarted/settings):

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["clsq\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

</details>

## Sources

`clsq` utility function is taken from
https://github.com/qwikifiers/qwik-ui/blob/main/packages/shared/src/utils/clsq.ts

This README.md is adapted from
https://github.com/lukeed/clsx/blob/master/readme.md

## License

ISC
