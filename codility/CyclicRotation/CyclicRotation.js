// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  if (A.length > 0 && K > 0) {
    for (let i = 0; i < K; i += 1) {
      A.unshift(A.pop());
    }
  }
  return A;
}
