// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  const binaryList = N.toString(2).split('');
  const oneIndexList = binaryList.reduce((acc, value, index) => {
    if (value === '1') {
      acc.push(index);
    }
    return acc;
  }, []);
  const reverseOneIndexList = oneIndexList.reverse();
  const gapList = reverseOneIndexList.reduce((acc, value, index, originList) => {
    if (index > 0) {
      const gap = (originList[index - 1] - 1) - Number(value);
      acc.push(gap);
    }
    return acc;
  }, []);
  const sortedGapList = gapList.sort();
  return sortedGapList.length > 0 ? sortedGapList[sortedGapList.length - 1] : 0;
}
