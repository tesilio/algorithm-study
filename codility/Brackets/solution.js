// https://app.codility.com/demo/results/trainingC9XCSG-SUD/
function solution(S) {  // 87%
  const N = S.length;
  if (N === 0) {
    return 1;
  }
  const pair = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const stack = [];
  for (let i = 0; i < N; i += 1) {
    const value = S.charAt(i);
    const top = stack[stack.length - 1];
    if (pair[value] === top) {
      stack.pop();
    } else {
      stack.push(value);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

// https://app.codility.com/demo/results/training9TBHE3-8PX/
function solution(S) {  // 87%
  const N = S.length;
  if (N === 0) {
    return 1;
  }
  const pair = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const stack = [];
  for (let i = 0; i < N; i += 1) {
    const value = S.charAt(i);
    const top = stack[stack.length - 1];
    if (pair.hasOwnProperty(value) === false) {
      stack.push(value);
    } else {
      if (pair[value] === top) {
        stack.pop();
      }
    }

  }
  return stack.length === 0 ? 1 : 0;
}



