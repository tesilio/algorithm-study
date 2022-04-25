// https://app.codility.com/demo/results/trainingYZGC5T-NVG/
function solution(S) {  // 75%
  const length = S.length;
  if (length < 4) {
    return 0;
  }
  const stack = [];
  for (let i = 0; i < length; i += 1) {
    const bracket = S.charAt(i);
    if (bracket === '(') {
      stack.push(i);
    } else {
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
}

// https://app.codility.com/demo/results/trainingAR7SAX-SKY/
function solution(S) {  // 87%
  const length = S.length;
  if (length > 0 && length < 4) {
    return 0;
  }
  const stack = [];
  for (let i = 0; i < length; i += 1) {
    if (S.charAt(i) === '(') {
      stack.push(i);
    } else {
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
}

// https://app.codility.com/demo/results/trainingSJAFEH-73J/
function solution(S) {  // 66%
  const length = S.length;
  if (length > 0 && length < 4) {
    return 0;
  }
  const stack = [];
  for (let i = 0; i < length; i += 1) {
    if (S.charAt(i) === '(') {
      stack.push(i);
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return 1;
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
}

// https://app.codility.com/demo/results/trainingHMR73F-A85/
function solution(S) {  // 100%
  const length = S.length;
  if (length % 2 === 1 || length > 0 && length < 4) {
    return 0;
  }
  const stack = [];
  for (let i = 0; i < length; i += 1) {
    if (S.charAt(i) === '(') {
      stack.push(i);
    } else {
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
}
