const arr = [1, 2, 3, 1, 2, 3];

const uniqueArr = new Set(arr);

const array = Array.from(uniqueArr);

console.log(array); // [1, 2, 3]