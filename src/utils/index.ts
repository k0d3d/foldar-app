export   function parseMetricNumber(metricValue = 0) {
  try {
    // @ts-ignore
    return parseFloat(metricValue).toFixed(2);
  } catch (e) {
    return "";
  }
}