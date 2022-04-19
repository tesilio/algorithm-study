// https://app.codility.com/demo/results/training3RBCE2-HJU/
function solution(X, A) {  // 54점
  const xList = Array.from({length: X}, (x, i) => i + 1);
  const match = {};
  const aLength = A.length;
  for (let i = 0; i < aLength; i += 1) {
    match[xList.indexOf(A[i])] = xList.indexOf(A[i]).toString() in match ? match[xList.indexOf(A[i])] += 1 : 1
    if (Object.keys(match).length === X) {
      return i;
    }
  }
  return -1;
}

// https://app.codility.com/demo/results/trainingP6HR5Y-ZD2/
function solution(X, A) {  // 54점
  const xList = Array.from({length: X}, (x, i) => i + 1);
  const xMap = {};
  xList.forEach((x) => {
    xMap[x] = false;
  });
  const aLength = A.length;
  for (let i = 0; i < aLength; i += 1) {
    const key = A[i].toString();
    if (key in xMap) {
      xMap[key] = true;
    }
    if (Object.values(xMap).every((x) => x)) {
      return i;
    }
  }
  return -1;
}

// https://app.codility.com/demo/results/trainingB5F7E7-CDE/
function solution(X, A) {  // 100점
  const aLength = A.length;
  const set = new Set();
  for (let i = 0; i < aLength; i += 1) {
    set.add(A[i]);
    if (set.size === X) {
      return i;
    }
  }
  return -1;
}
