//Not quite sure but I think this goes factorial 

/**
Given a nested list of int array - calculate the sum of all the integers, while multiplying each number by its depth.
*/
function sum(array, depth) {
  depth = depth || 1;
  return array.reduce(function (acc, current) {
    var isArray = Array.isArray(current);
    acc += isArray ? sum(current, depth + 1) : current * depth;
    return acc;
  }, 0);
}
