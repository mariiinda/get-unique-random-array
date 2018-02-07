import test from 'ava';

import getRandomArray from '.';

const targetArray = [
  { id: 1, status: false },
  { id: 2, status: true },
  { id: 3, status: false },
  { id: 4, status: true },
  { id: 5, status: false },
];
const size = 2;

test('getRandomArray returns an array', t => {
  const arr = getRandomArray(targetArray);
  t.true(Array.isArray(arr));
});

test('getRandomArray returns an array of length === 1 by default', t => {
  const arr = getRandomArray(targetArray);
  t.true(arr.length === 1);
});

test('getRandomArray throws error if size > targetArray.length', t => {
  t.throws(() => {
    getRandomArray(targetArray, { size: targetArray.length + 1 });
  });
});

test('getRandomArray returns a unique array', t => {
  const arr = getRandomArray(targetArray, {
    size,
  });
  console.log(arr);
  let expected = [...new Set(arr)]; // convert to Set and back to array, a Set cannot have duplicates
  t.deepEqual(arr, expected);
});

test('getRandomArray returns an array of specified size', t => {
  const arr = getRandomArray(targetArray, {
    size,
  });
  t.true(arr.length === size);
});
