function (key, values){
    reducedValue = {size: 0, total: 0}
    reducedValue.size = values.length;
    reducedValue.total = Array.sum(values);
    return reducedValue;
}
