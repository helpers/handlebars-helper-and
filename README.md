# handlebars-helper-and [![NPM version](https://img.shields.io/npm/v/handlebars-helper-and.svg?style=flat)](https://www.npmjs.com/package/handlebars-helper-and) [![NPM monthly downloads](https://img.shields.io/npm/dm/handlebars-helper-and.svg?style=flat)](https://npmjs.org/package/handlebars-helper-and) [![NPM total downloads](https://img.shields.io/npm/dt/handlebars-helper-and.svg?style=flat)](https://npmjs.org/package/handlebars-helper-and) [![Linux Build Status](https://img.shields.io/travis/helpers/handlebars-helper-and.svg?style=flat&label=Travis)](https://travis-ci.org/helpers/handlebars-helper-and)

> Handlebars helper that returns true when all of the given conditions are truthy.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save handlebars-helper-and
```

## Usage

```js
handlebars.registerHelper('and', require('handlebars-helper-and'));
```

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

**Example**

```handlebars
<!-- { great: true, magnificent: true } -->
{{#and great magnificent}} A {{else}} B {{/and}}
<!-- results in: ' A ' -->
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Author

**Jon Schlinkert**

* [LinkedIn Profile](https://linkedin.com/in/jonschlinkert)
* [GitHub Profile](https://github.com/jonschlinkert)
* [Twitter Profile](https://twitter.com/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on March 23, 2018._