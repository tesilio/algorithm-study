// https://app.codility.com/demo/results/training76C3TA-8H4/
function solution(H) {  // 14%
  const N = H.length;
  const blocks = [];
  for (let i = 0; i < N; i += 1) {
    const top = blocks[blocks.length - 1];
    if (H[i] !== top) {
      blocks.push(H[i]);
    } else {
      blocks.pop();
    }
  }
  return blocks.length;
}

// https://app.codility.com/demo/results/trainingFKC3H9-VRH/
function solution(H) {  // 100%
  const N = H.length;
  const stack = [];
  let count = 0;
  for (let i = 0; i < N; i += 1) {
    while (stack.length > 0 && H[i] < stack[stack.length - 1]) {
      stack.pop();
    }
    if (stack.length === 0 || H[i] > stack[stack.length - 1]) {
      stack.push(H[i]);
      count += 1;
    }
  }
  return count;
}
