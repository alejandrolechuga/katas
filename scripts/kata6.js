
/*
Sum of Pairs

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

ven a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]

Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
*/

// first try O(n^2)
var sum_pairs=function(ints, s){
  var pos = null;
  var result = undefined;
  for (var i = 0, length = ints.length; i < length; i++ )  {
    for (var j = i + 1; j < length; j++ )  {
      if ( ints[i] + ints[j]  === s) {
        if ( !pos || Math.max(pos[0], pos[1]) > Math.max(i, j) ) {
          pos = [i, j];
          result = [ints[i], ints[j]];
        }
      }
    }
  }
  return result;
}

// O(n)
function sumequal(array, sum ) {
  var i = 0;
  var j = i + 1;
  var length = array.length;
  var keep = true;

  while (keep) {
    if (array[i] + array[j] === sum) {
      return [array[i],array[j]]
    }
    else if (i + 1 < j) { i++; } 
    else if (j + 1 < length) { j++; i = 0; } 
    else { keep = false; };
  }
  return null;
}
// recursive 
function sum_pairs(array, sum) {
 var i = 0
  var j = i + 1;
  function recsumeq(array, sum, i, j) {
    if (array[i] + array[j] == sum) {
      return [array[i],array[j]];
    } else if (i + 1 < j) {
      return recsumeq(array, sum, i+1, j);
    } else if (j + 1 < array.length) {
      return recsumeq(array, sum, 0, j+1);
    } else return null;
  }
  return recsumeq(array,sum, i, j);
}

// fastest solution 
// store the compliment you are looking for in this case is sum - array[i], if this value exists in the map then return the pair
var sum_pairs = function(array, sum){
  var map = {};
  for (var i  = 0, length = array.length; i < length; i++) {
    if (array[i] in map) return [array[map[array[i]]], array[i]];
    map[sum - array[i]] = i;
  } 
  return null;
}
