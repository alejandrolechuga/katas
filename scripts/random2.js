removeDumplicates([2, 5, 6, 3, 2, 4, 3])) //=>  [2, 5, 6, 3, 4]

// solution 1
function removeDumplicates(array) {
  var map = {};
  return array.reduce(function (acc, current) {
    if (!(current in map)) {
      acc.push(current);
      map[current] = true;
    }
    return acc;
  },[]);
}

// solution 2
function removeDumplicates(array) {
  var map = {};
  return array.filter(function (item) {
    if (!(item in map)) {
      map[item] = true;
      return true
    }
  });
}
