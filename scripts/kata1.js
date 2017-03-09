/***
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

**/
// First try.
function list(names) {
  var string; 
  var last;
  var ampersand = ' & ';
  var comma = ', ';
  
  names = names
    .map(function(item){
      return item.name;
    });
    
  if ( names.length > 2) {
    last = names.pop();
    string = names.join(comma) + [ampersand, last].join('');
  } else if ( names.length > 1)  {
    string = names.join(ampersand);
  } else {
    string = names[0] || '';
  }
  
  return string;
}

// Second Try
function list(names) {
  if (names.length === 0) return '';
  return names
    .map((item) => item.name)
    .reduce(function (acc, current, index, array) {
      var lastIndex = array.length - 1;
      var separator = (index > 0 && index < lastIndex) ? ', ' : ' & ';
      return acc + separator + current;
  });
}
