// https://programmers.co.kr/learn/courses/30/lessons/92334
// 신고 결과 받기

function solution(id_list, report, k) {
  const reportSet = [...new Set(report)];
  const idReportingCountMap = id_list.reduce((acc, id) => {
    acc[id] = 0;
    return acc;
  }, {});
  const reportHashMap = reportSet.map((reportString) => {
    const [key, value] = reportString.split(' ');
    if (value in idReportingCountMap) {
      idReportingCountMap[value] += 1;
    }
    return {
      [key]: value,
    };
  });
  return id_list.map((id) => {
    let count = 0;
    const filterReports = reportHashMap.filter((value) => id in value);
    if (filterReports.length > 0) {
      filterReports.map((reportingMap) => {
        if (idReportingCountMap[reportingMap[id]] >= k) {
          count += 1;
        }
      });
    }
    return count;
  });
}

/**
 * 비슷한 문제는 다음에 Map을 활용하여 풀어보자
 */
