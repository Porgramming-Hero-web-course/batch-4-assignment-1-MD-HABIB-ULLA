type sum = (array: number[]) => number;

const sumArray: sum = (array) => {
  return array.reduce((acc, current) => acc + current, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));
