/** 
  @name chunk
  @param array {Array}
  @param size {Number} size=1
  
  Creates an array of elements split into groups the length of size. 
  If array can't split evenly, the final chunk will be in the remaining elements
  O(n) complexity
  
  Test 
  
  var testArray = ['a', 'b', 'c', 'd'];
  chunk(testArray, 2) // => [['a', 'b'], ['c', 'd']]
  chunk(testArray, 2) // => [['a', 'b', 'c'], ['d']]
  
  assert(JSON.stringify(chunk(testArray, 2)), JSON.stringify([['a', 'b'], ['c', 'd']]));
  assert(JSON.stringify(chunk(testArray, 3)), JSON.stringify([['a', 'b', 'c'], ['d']]));

  function assert(a, b) {
    if (a === b) {
      console.log('ASSERTION PASSED');
    } else {
      console.log('ASSERTION FAILED');
    }
  }
*/

// version 1
function chunk(array, size) {
  // default to 1
  if ( typeof size !== 'number' ) {
    size = 1;
  }
  
  var chunks = [];
  var chunkIndex = 0;
  
  for (var i = 0, length = array.length; i < length; i++ ) {

    // chunk initialization
    if (chunks[chunkIndex] === undefined) {
      chunks[chunkIndex] = [];
    }
    
    // results.length < size 
    if ( chunks[chunkIndex].length < size ) {
      chunks[chunkIndex].push(array[i]);
    }

    // if is chunks length is equal to the size
    if ( chunks[chunkIndex].length === size ) {
      chunkIndex++;
    }
  }
  
  return chunks;
}

// version 0  
// slower because slice must doing another operations 

function chunk (array, size) {
  var length = array.length;
  var i = 0;
  var j = size;
  var results = [];
  
  while(i < length) {
    results.push(array.slice(i, j));
    i = i + size;
    j = i + size;
  }
  return results;
}

