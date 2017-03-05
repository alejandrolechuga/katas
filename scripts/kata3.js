// solution
function reverseString(string) {
  return string.split('').reverse().join('');
}

// another solution
function reverseString(string) {
  var result = '';
  for (var i = string.length -1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

