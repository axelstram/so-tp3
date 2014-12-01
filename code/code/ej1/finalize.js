function (key, reducedValue) {

  reducedValue.avg = reducedValue.score / reducedValue.submision;
  return reducedValue;
}
