// https://app.codility.com/demo/results/trainingHXXHGZ-2P7/
function solution(A) {  // 0%
  const N = A.length;
  const RList = A.filter((v) => v < N);
  const QList = A.filter((v) => {
    return RList.find((r) => v < r) !== undefined;
  });
  const PList = A.filter((v) => {
    return QList.find((q) => v < q && v >= 0) !== undefined;
  });
  return RList.length > 0 && QList.length > 0 && PList.length > 0 ? 1 : 0;
}

// https://app.codility.com/demo/results/training6UXQGB-NWK/
function solution(A) {  // 0%
  const N = A.length;
  const RList = A.filter((v) => v < N && v >= 0);
  const QList = A.filter((v) => {
    return RList.find((r) => v < r && v >= 0) !== undefined;
  });
  const PList = A.filter((v) => {
    return QList.find((q) => v < q && v >= 0) !== undefined;
  });
  return RList.length > 0 && QList.length > 0 && PList.length > 0 ? 1 : 0;
}

// https://app.codility.com/demo/results/trainingA48GW4-VPT/
function solution(A) {  // 0%
  const N = A.length;
  const positiveList = A.filter((v) => v > 0 && v < N);
  const setList = [...new Set(positiveList)];
  return setList.length === 3 ? 1 : 0;
}

// https://app.codility.com/demo/results/training7UQXYP-TWC/
function solution(A) {  // 0%
  const N = A.length;
  const sortedList = A.sort((a, b) => a - b);
  if (sortedList[0] < 0) {
    return 0;
  }
  for (let i = 0;i < N;i += 1) {
    if (sortedList[i] + sortedList[i + 1] > sortedList[i + 2]) {
      return 1;
    }
  }
  return 0;
}

// https://app.codility.com/demo/results/trainingHPY4Q6-UMP/
function solution(A) {  // 100%
  const N = A.length;
  const sortedList = A.slice().sort((a, b) => a - b);
  for (let i = 0;i < N;i += 1) {
    const value = sortedList[i];
    if (value < 0) {
      continue;
    }
    if (value + sortedList[i + 1] > sortedList[i + 2]) {
      return 1;
    }
  }
  return 0;
}

// https://app.codility.com/demo/results/training8QPS34-5MZ/
function solution(A) {  // 100%
  const sortedList = A.slice().filter((v) => v > 0).sort((a, b) => a - b);
  const sortedListLength = sortedList.length;
  for (let i = 0;i < sortedListLength;i += 1) {
    const value = sortedList[i];
    if (value + sortedList[i + 1] > sortedList[i + 2]) {
      return 1;
    }
  }
  return 0;
}
