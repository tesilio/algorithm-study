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
