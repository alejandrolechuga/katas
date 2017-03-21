/**
* flatten an array first level
*/
function flatten(array) {
  return array.reduce((acc, current) => {
    return Array.isArray(current) ? acc.concat(current) : acc.concat([current]);
  }, []);
}

