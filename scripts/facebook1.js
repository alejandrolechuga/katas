/**
* flatten an array first level
* @method flatten
* @param array {Array}
* @return {Array} flatten array
*/
function flatten(array) {
  // O(n)
  return array.reduce((acc, current) => {
    return Array.isArray(current) ? acc.concat(current) : acc.concat([current]);
  }, []);
}

/**
* flatten an array recursively
* @method flattenDeep
* @param array {Array}
* @return {Array} flatten array
*/
function flattenDeep(array) {
  return array.reduce((acc, current) => {
    return Array.isArray(current) ? acc.concat(flattenDeep(current)) : acc.concat([current]);
  }, []);
}

/**
* flatten an array recursively limited by depth
* @method flattenDepth
* @param array {Array}
* @return {Array} flatten array
*/
function flattenDepth(array, depth) {
  if (depth === 0) {
    return array;
  }
  return array.reduce((acc, current) => {
    return Array.isArray(current) ? acc.concat(flattenDepth(current, --depth)) : acc.concat([current]);
  }, []);
}

function flattenDepth(array, depth) {
  if (depth === 0) {
    return array;
  }
  
  return array.reduce((acc, current) => {
    return Array.isArray(current) ? acc.concat(flattenDepth(current, --depth)) :    acc.concat([current]);
  }, []);
}

// 1 level
var result = JSON.stringify(flattenDepth(array, 1));
var expected = JSON.stringify([1, 2, [3, [4]], 5]);
console.log('FlattenDepth', assert(result, expected));

// 3 levels
var result = JSON.stringify(flattenDepth(array, 2));
var expected = JSON.stringify([1, 2, 3, [4], 5]);
console.log('FlattenDepth 2', assert(result, expected));

// 4 levels
var result = JSON.stringify(flattenDepth(array, 3));
var expected = JSON.stringify([1, 2, 3, 4, 5]);
console.log('FlattenDepth 3', assert(result, expected));

// 4 levels
var result = JSON.stringify(flattenDepth(array, 5));
var expected = JSON.stringify([1, 2, 3, 4, 5]);
console.log('FlattenDepth 3', assert(result, expected));
