// https://app.codility.com/demo/results/training4RSKE3-3ST/
function solution(A) {  // 70%
  let count = 0;
  let eastCount = 0;
  for (let i in A) {
    if (A[i] === 0) {
      eastCount += 1;
    } else {
      count += eastCount;
    }
    if (count > 1000000000) {
      return count;
    }
  }
  return count;
}

// https://app.codility.com/demo/results/training2B5YMT-2CC/
function solution(A) {  // 100%
  let count = 0;
  let eastCount = 0;
  const ALength = A.length;
  for (let i = 0;i < ALength;i += 1) {
    if (A[i] === 0) {
      eastCount += 1;
    } else {
      count += eastCount;
    }
    if (count > 1000000000) {
      return -1;
    }
  }
  return count;
}
