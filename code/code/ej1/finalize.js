function (key, reducedValue) {
  reducedValue.avg = reducedValue.total / reducedValue.size;
  return reducedValue;
}
