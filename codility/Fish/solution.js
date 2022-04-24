// https://app.codility.com/demo/results/trainingP2VEVR-58Q/
function solution(A, B) {  // 62%
  const N = A.length;
  const aliveFishes = [0];
  if (N === 1) {
    return 1;
  }
  let i = 1;
  while (i < N) {
    const top = aliveFishes.length - 1;
    if (B[i] === 0 && B[top] === 1) {
      if (A[i] > A[top]) {
        aliveFishes.pop();
      } else {
        i += 1;
      }
    } else {
      aliveFishes.push(i);
      i += 1;
    }
  }
  return aliveFishes.length;
}

// https://app.codility.com/demo/results/training6SSEY9-DYS/
function solution(A, B) {  // 100%
  const N = A.length;
  const aliveFishes = [0];
  if (N === 1) {
    return 1;
  }
  let i = 1;
  while (i < N) {
    const top = aliveFishes.length - 1;
    if (B[i] === 0 && B[aliveFishes[top]] === 1) {
      if (A[i] > A[aliveFishes[top]]) {
        aliveFishes.pop();
      } else {
        i += 1;
      }
    } else {
      aliveFishes.push(i);
      i += 1;
    }
  }
  return aliveFishes.length;
}
