function findMinimumWordDistance(words, wordA, wordB) {
  var wordAIndex = null;
  var wordBIndex = null;
  var minDinstance = null;
  
  for (var i = 0, length = words.length; i < length; i++ ) {
    if (words[i] === wordA) {
      wordAIndex = i;
    }
    
    if (words[i] === wordB) {
      wordBIndex = i;
    }

    if ( wordAIndex !== null && wordBIndex !== null ) {
      var distance = Math.abs(wordAIndex - wordBIndex);
      if(minDinstance === null || minDinstance > distance) {
        minDinstance = distance;
      } 
    }
  }
  return minDinstance;
}

console.log(findMinimumWordDistance(["the", "quick", "brown", "fox", "quick"], "quick", 'brown'));

