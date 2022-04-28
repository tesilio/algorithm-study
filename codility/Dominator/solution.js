// https://app.codility.com/demo/results/training2XCTE7-GMU/
function solution(A) {  // 100%
  let countObject = {};
  const length = A.length;
  for (let i = 0; i < length; i += 1) {
    const value = A[i];
    countObject[value] = value in countObject ? countObject[value] + 1 : 1;
    if (countObject[value] > (length / 2)) {
      return i;
    }
  }
  return -1;
}
