/**
  Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
  @function compact
  @param array {Array}
  @return array {Array} array without the falsy values
*/

// veersion 1 with loop
function compact(array) {
  var i = 0;
  var length = array.length;
  var results = [];
  while(i < length) {
    if (array[i]) {
      results.push(array[i]);
    }
    i++;
  }
  return results;
}


assert(compact([1,2,'',false, NaN, undefined, 0, 1,3, 'HOLA']), [1,2,1,3,'HOLA']);

// version 2 with built-in array method
function compact(array) {
  return array.filter(function (element) {
    return !!element;
  });
}

assert(compact([1,2,'',false, NaN, undefined, 0, 1,3, 'HOLA']), [1,2,1,3,'HOLA']);
