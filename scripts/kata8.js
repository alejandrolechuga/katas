/**
find if pair sum is within an array 
**/

var array = [9,2,2,3,4,4,5];
/**
  Two indexes one starts from 0 the other starts from the end , in every iteration we increase the lo and decrese the hi until the condtion is valid, otherwise we return false by default
*/
function hasPair(array, sum) {
  var lo = 0;
  var hi = array.length - 1;
  // we sort the input
  array = array.sort();
  while( lo < hi ) {
    if (array[lo] + array[hi] === sum) {
      return true;
    } else {
      lo++;
      hi--;
    }
  }
  return false;
}

hasPair(array, 7);

