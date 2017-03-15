
/**
Description:

Welcome. In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc. As an example:
**/

function alphabetPosition(text) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text
    .replace(/[^a-z]/gi,'')
    .split('')
    .map(function (letter) { return (alphabet.indexOf(letter.toLowerCase()) + 1); })
    .join(' ');
}
