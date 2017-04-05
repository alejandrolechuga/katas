/**
* @function concat
* @param array {Array}
* @param {...arguments}
* @return array {Array} values concatenated
*/


function concat(array) {
  var rest = Array.prototype.slice.call(arguments, 1);
  return rest.reduce(function (acc, current) {
    return Array.isArray(current) ? [].concat.call(acc, current): acc.concat([current]);
  }, array); 
}

assert(concat([1], 2, [3], [[4]]), [1,2,3,[4]]);
