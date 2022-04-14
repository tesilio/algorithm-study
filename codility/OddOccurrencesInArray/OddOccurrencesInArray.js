// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const reducedObject = A.reduce((acc, value, index) => {
    acc[value] = !acc[value] ? 1 : acc[value] + 1;
    return acc;
  }, {});
  return Number(Object.keys(reducedObject).find((key) => reducedObject[key] % 2 === 1));
}
