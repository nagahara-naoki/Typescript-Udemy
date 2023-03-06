const reducer = (a: number, b: number) => {
  return a + b;
};
const sum: (...value: number[]) => number = (...value: number[]) => {
  return value.reduce(reducer);
};
sum(1, 2, 3, 4, 5);
console.log(sum(1, 2, 3, 4, 5));
