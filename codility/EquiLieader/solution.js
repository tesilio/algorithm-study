// https://app.codility.com/demo/results/training35QYPA-RBN/
function solution(A) {  // 100%
  const N = A.length;
  const left = {};
  const right = {};
  for (let i = 0; i < N; i++) {
    const now = A[i];
    right[now] = right[now] === undefined ? 1 : right[now] + 1;
  }
  let leftLength = 0;
  let leftLeader = 0;
  let leftLeaderCount = 0;
  let rightLength = N;
  let answer = 0;
  for (let i = 0; i < N; i++) {
    const now = A[i];
    right[now] -= 1;
    rightLength -= 1;
    left[now] = left[now] === undefined ? 1 : left[now] + 1;
    leftLength += 1;
    if (left[now] > leftLeaderCount) {
      leftLeader = now;
      leftLeaderCount = left[now];
    }
    if (right[leftLeader] > Math.floor(rightLength / 2) && leftLeaderCount > Math.floor(leftLength / 2)) {
      answer += 1;
    }
  }
  return answer;
}
