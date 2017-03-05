// reverse string letters excluding the non-alphabetic characters

function reverseLetter(str) {
  //coding and coding..
  var match = str.match(/[a-z]/g);
  return match ? match.reverse('').join('') : '';
}
