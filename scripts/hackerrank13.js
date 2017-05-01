// Parse camelCase words
// Parsear palabras en camelCase


function parseCamelCase(word)  {
  word = word.split('');
  var wordBeginIndex = 0;
  var parsedWords = [];
  for (var i = 0, length = word.length; i < length; i++) {
    var isLastIndex = i === length - 1;
    if (word[i] === word[i].toUpperCase() || isLastIndex) {
      parsedWords.push(word.slice(wordBeginIndex, !isLastIndex ? i : i+1).join(''));
      wordBeginIndex = i;
    }
  }
  
  return parsedWords;
}



// test cases
console.log(assert(parseCamelCase('saveThisText'), ['save','This', 'Text']));
console.log(assert(parseCamelCase('sTText'), ['s','T', 'Text']));
console.log(assert(parseCamelCase('saas'), ['saas']));

// assert function 
function assert(a, b) {
  if (typeof a === 'object') {
    a = JSON.stringify(a);
    b = JSON.stringify(b);
  }
  console.log(a + ' === '+ b)
  return a === b;
}
