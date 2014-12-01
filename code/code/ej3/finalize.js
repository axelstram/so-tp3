function (key, reducedValue) {
  reducedValue.avg = reducedValue.comentarios / reducedValue.submision;
  return reducedValue;
}
