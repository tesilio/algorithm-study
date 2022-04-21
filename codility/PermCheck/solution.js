// https://app.codility.com/demo/results/training9EZCH9-5JS/
function solution(A) {  // 100%
  const sortedA = A.sort((a, b) => a - b);
  const sortedALength = sortedA.length;
  for (let i = 0; i < sortedALength; i += 1) {
    if ((i + 1) !== sortedA[i]) {
      return 0;
    }
  }
  return 1;
}
