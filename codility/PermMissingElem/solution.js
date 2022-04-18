// https://app.codility.com/demo/results/trainingN8MHBS-3J7/
function solution(A) {
  if (A.length === 0) {
    return 1;
  }
  console.log((((A.length + 2) * (A.length + 1)) / 2));
  return (((A.length + 2) * (A.length + 1)) / 2) - A.reduce((acc, value) => {
    return acc + value;
  }, 0);
}
