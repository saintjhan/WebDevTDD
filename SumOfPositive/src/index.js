const positiveSum = arr => { const result = arr.filter(arr => arr >= 0);
return result.reduce(function(sum, value) { return sum + value;}, 0);}

module.exports = positiveSum;