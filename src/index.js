const getRandomItem = ({ list = [] }) =>
  list[Math.floor(Math.random() * Math.floor(list.length - 1))];

const getRandomArray = (list = [], options = { size: 1 }) => {
  const { size = 1 } = options;
  if (!Array.isArray(list)) {
    throw new TypeError("list: expected an array");
  }
  if (!Number.isInteger(size)) {
    throw new TypeError("size: expected a number");
  }
  if (size > list.length) {
    throw new Error("size: size can't be > than the target array length");
  }
  const randomList = [];
  while (randomList.length < size) {
    const item = getRandomItem({ list });
    if (!randomList.includes(item)) {
      randomList.push(item);
    }
  }
  return randomList;
};

export default getRandomArray;
