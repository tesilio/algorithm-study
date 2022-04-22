// https://app.codility.com/demo/results/trainingAP668N-NQW/
function solution(A) {  // 44%
  const sortedA = A.sort((a, b) => Number(b) - Number(a));
  const [a, b, c] = sortedA;
  return a * b * c;
}

// https://app.codility.com/demo/results/trainingH7WDQQ-NW9/
function solution(A) {  // 44%
  A.sort((a, b) => a - b);

  const n = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
  const m = A[0] * A[1] * A[2];

  return Math.max(n, m);
}

// https://app.codility.com/demo/results/trainingF59S5B-HC3/
function solution(A) {   // 100%
  A.sort((a, b) => a - b);

  const n = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
  const m = A[0] * A[1] * A[A.length - 1];

  return Math.max(n, m);
}
