var array = [1,2,3,4,4,3];
function nonDuplicate(array){
  var map = {};
  for (var i = 0, length = array.length; i < length; i++) {
    var value = array[i];
    if (value in map) {
      map[value] = true;
    } else {
      map[value] = false;
    }
  }

  return Object.keys(map).reduce(function (acc, current) {
    if (!map[current]) {
      acc.push(parseInt(current));
    }
    return acc;
  },[]);
}

console.log('non-duplicates', nonDuplicate(array));
