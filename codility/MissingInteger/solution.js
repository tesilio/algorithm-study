// https://app.codility.com/demo/results/trainingMUMQ9K-GCU/
function solution(A) {  // 66%
  const sortedA = [...new Set(A)].sort((a, b) => a - b);
  let count = 0;
  for (let K in sortedA) {
    K = Number(K);
    const X = sortedA[K];
    if (X > 0) {
      count += 1;
      const nextX = sortedA[K + 1];
      if (nextX === undefined || (nextX - X) > 1) {
        return X + 1;
      }
      if (count !== X) {
        return count;
      }
    }
  }
  return 1;
}

// https://app.codility.com/demo/results/trainingC2VE65-5ZX/
function solution(A) {  // 100%
  const sortedA = [...new Set(A)].sort((a, b) => a - b);
  let count = 0;
  for (let K in sortedA) {
    K = Number(K);
    const X = sortedA[K];
    if (X > 0) {
      count += 1;
      if (count !== X) {
        return count;
      }
      const nextX = sortedA[K + 1];
      if (nextX === undefined || (nextX - X) > 1) {
        return X + 1;
      }
    }
  }
  return 1;
}
