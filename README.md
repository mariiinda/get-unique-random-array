# get-unique-random-array [![Build Status](https://travis-ci.org/marinda-s/get-unique-random-array.svg?branch=master)](https://travis-ci.org/marinda-s/get-unique-random-array) [![npm](https://img.shields.io/npm/dm/get-unique-random-array.svg?style=flat-square)](https://www.npmjs.com/package/get-unique-random-array)

> Get unique random array from an array

## Install

```sh
$ npm install get-unique-random-array
```

## Usage / API

```javascript
import getRandomArray from 'get-unique-random-array';

const targetArray = [
  { id: 1, status: false },
  { id: 2, status: true },
  { id: 3, status: false },
  { id: 4, status: true },
  { id: 5, status: false },
];
const size = 2;

console.log(getRandomArray(targetArray, { size })); // => [ { id: 4, status: true }, { id: 3, status: false } ]
```

## License

MIT
