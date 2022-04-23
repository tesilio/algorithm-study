// https://app.codility.com/demo/results/trainingGFKJUG-ZMZ/
function solution(A) {  // 62%
  const N = A.length;
  const discs = A.slice().map((radius, center) => {
    return {
      left: center - radius,
      center,
      right: center + radius,
    };
  });
  const sortedDiscs = discs.sort((a, b) => a.left - b.left);
  let count = 0;
  for (let i = 0; i < N; i += 1) {
    const disc = sortedDiscs[i];
    const containDiscs = sortedDiscs.filter((filterDisc, filterIndex) => {
      return i < filterIndex
        && (disc.right >= filterDisc.left);
    });
    count += containDiscs.length;
    if (count > 10000000) {
      return -1;
    }
  }
  return count;
}

// https://app.codility.com/demo/results/training7MVW2D-W7W/
function solution(A) {  // 68%
  const N = A.length;
  const discs = A.slice().map((radius, center) => {
    return {
      left: center - radius,
      center,
      right: center + radius,
    };
  });
  const sortedDiscs = discs.sort((a, b) => a.left - b.left);
  let count = 0;
  for (let i = 0; i < N; i += 1) {
    if (count > 10000000) {
      return -1;
    }
    const slicedDiscs = sortedDiscs.slice(i + 1);
    const disc = sortedDiscs[i];
    const containDiscs = slicedDiscs.filter((filterDisc, filterIndex) => {
      return disc.right >= filterDisc.left;
    });
    count += containDiscs.length;
  }
  return count;
}

// https://app.codility.com/demo/results/trainingKXWBYV-TZV/
function solution(A) {  // 81%
  const N = A.length;
  const discs = A.slice().map((radius, center) => {
    return {
      left: center - radius,
      center,
      right: center + radius,
    };
  });
  const sortedDiscs = discs.sort((a, b) => a.left - b.left);
  let count = 0;
  for (let i = 0; i < N; i += 1) {
    const slicedDiscs = sortedDiscs.slice(i + 1);
    const disc = sortedDiscs[i];
    const slicedDiscsLength = slicedDiscs.length;
    for (let k = 0; k < slicedDiscsLength; k += 1) {
      if (count > 10000000) {
        return -1;
      }
      if (disc.right >= slicedDiscs[k].left) {
        count += 1;
      }
    }
  }
  return count;
}

// https://app.codility.com/demo/results/training6AJGTN-Y8Y/
function solution(A) {  // 87%
  const N = A.length;
  const discs = A.map((radius, center) => {
    return {
      left: center - radius,
      right: center + radius,
    };
  });
  const sortedDiscs = discs.sort((a, b) => a.left - b.left);
  let count = 0;
  for (let J = 0; J < N; J += 1) {
    const disc = sortedDiscs[J];
    for (let K = 0; K < N; K += 1) {
      if (count > 10000000) {
        return -1;
      }
      const nextDisc = sortedDiscs[K];
      if (disc.right < nextDisc.left) {
        break;
      }
      if (J < K && disc.right >= nextDisc.left && disc.left <= nextDisc.left) {
        count += 1;
      }
    }
  }
  return count;
}

// https://app.codility.com/demo/results/training44RQKU-JRW/
function solution(A) {  // 100%
  const N = A.length;
  const discs = A.map((radius, center) => {
    return {
      left: center - radius,
      right: center + radius,
    };
  });
  const sortedDiscs = discs.sort((a, b) => a.left - b.left);
  let count = 0;
  for (let J = 0; J < N; J += 1) {
    const disc = sortedDiscs[J];
    for (let K = 0; K < N; K += 1) {  // info: 다음 인덱스부터 시작해야 헛돌지 않음
      if (count > 10000000) {
        return -1;
      }
      const nextDisc = sortedDiscs[K];
      if (disc.right < nextDisc.left) {
        break;
      }
      if (J < K && disc.right >= nextDisc.left && disc.left <= nextDisc.left) {
        count += 1;
      }
    }
  }
  return count;
}
