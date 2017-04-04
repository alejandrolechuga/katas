/** 
  @name chunk
  @param array {Array}
  @param size {Number} size=1
  
  Creates an array of elements split into groups the length of size. 
  If array can't split evenly, the final chunk will be in the remaining elements
*/

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
