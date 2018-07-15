# get-unique-random-array [![Build Status](https://api.travis-ci.org/mariiinda/get-unique-random-array.svg?branch=master)](https://travis-ci.org/mariiinda/get-unique-random-array) [![npm](https://img.shields.io/npm/dm/get-unique-random-array.svg?style=flat-square)](https://www.npmjs.com/package/get-unique-random-array)

> Get a unique random array from an array

## Install

```sh
$ npm install get-unique-random-array
```

## Usage / API

```javascript
import getUniqueRandomArray from "get-unique-random-array";
// const getUniqueRandomArray = require("get-unique-random-array").default; // node,commonJS

const targetArray = [
  { id: 1, status: false },
  { id: 2, status: true },
  { id: 3, status: false },
  { id: 4, status: true },
  { id: 5, status: false }
];
const size = 2;

console.log(getUniqueRandomArray(targetArray, { size })); // => [ { id: 4, status: true }, { id: 3, status: false } ]
```

## License

MIT
