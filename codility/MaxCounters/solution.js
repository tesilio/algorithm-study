// https://app.codility.com/demo/results/training3XN4JC-UYN/
function solution(N, A) {  // 66%
  let resultArray = Array.from({ length: N }, (x, i) => 0);
  A.forEach((value) => {
    const index = value - 1;
    // 벗어났을 때 최대 카운터!
    if (resultArray[index] === undefined) {
      const maxNumber = Math.max(...resultArray);
      resultArray = Array.from({ length: N }, (x, i) => maxNumber);
    } else {
      resultArray[index] = resultArray[index] + 1;
    }
  });
  return resultArray;
}


function solution(N, A) {  // 66%
  let resultArray = Array.from({ length: N }, (x, i) => 0);
  A.forEach((value) => {
    const index = value - 1;
    // 벗어났을 때 최대 카운터!
    if (resultArray[index] === undefined) {
      const reverceResultArray = resultArray.sort((a, b) => b - a);
      resultArray = Array.from({ length: N }, (x, i) => reverceResultArray[0]);
    } else {
      resultArray[index] = resultArray[index] + 1;
    }
  });
  return resultArray;
}


// https://app.codility.com/demo/results/trainingEBPRBD-GRD/
function solution(N, A) {  // 66%
  let resultArray = Array.from({ length: N }, (x, i) => 0);
  A.forEach((value) => {
    const index = value - 1;
    // 벗어났을 때 최대 카운터!
    if (resultArray[index] === undefined) {
      const reverceResultArray = resultArray.sort((a, b) => b - a);
      resultArray = Array.from({ length: N }, (x, i) => reverceResultArray[0]);
    } else {
      resultArray[index] = resultArray[index] + 1;
    }
  });
  return resultArray;
}

// https://app.codility.com/demo/results/trainingKV7CJM-QGM/
function solution(N, A) {
  let counters = new Array(N).fill(0);
  let max = 0;
  let lastMax = 0;

  for (let K in A) {
    let X = A[K];
    if (X > N) {
      lastMax = max;
    } else {
      const counterIndex = X - 1;
      if (counters[counterIndex] < lastMax) {
        counters[counterIndex] = lastMax;
      }
      counters[counterIndex] += 1;
      if (max < counters[counterIndex]) {
        max = counters[counterIndex];
      }
    }
  }

  for (let i = 0; i < N; i += 1) {
    if (counters[i] < lastMax) {
      counters[i] = lastMax;
    }
  }

  return counters;
}
