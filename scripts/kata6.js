
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

//TODO: look for O(n) solution
// not yet performant
