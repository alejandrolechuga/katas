/**
* find number factors
* @param {Number} number
* @return {Array} list of factors of number
*/
function getFactors(number) {
  var indexFactor = 1;
  var lastFactor = number;
  var factorsA = [];
  var factorsB = []
  while (indexFactor !== lastFactor) {
    if (lastFactor % indexFactor === 0) {
      lastFactor = number/indexFactor;
      factorsA.push(indexFactor);
      factorsB.unshift(lastFactor);
    }
    indexFactor++;
  }
  return factorsA.concat(factorsB);
}

console.log(getFactors(120));
