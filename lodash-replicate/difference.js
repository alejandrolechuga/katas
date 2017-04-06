
/**
* Creates an array of values not included in the other given arrays using sameVaueZero for equality comparisions 
* @function difference
* @param array {Array}
* @param values {Array}
*/

// version 1

function difference(array, values) {
  var hashmap = values.reduce(function (hashmap, current) {
    if (!hashmap[current]) {
      hashmap[current] = true;
      return hashmap;
    }
  }, {});
  
  return array.filter(function (element) {
    return !hashmap[element];
  });
}
