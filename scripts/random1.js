/*
Givent an array of integers, there are some integers repeated even number of times and only one integer repeated odd number of times. Write a function that returns the odd one.

[2,1,3,2,1] -> should return 3

*/

function findOddOne(array) {
    var numbers = {};
    for(var i = 0; i < array.length; i++) {
       numbers[array[i]] = numbers[array[i]] ? 1+numbers[array[i]] : 1;
    }
 
  var keys = Object.keys(numbers);
  for (var i = 0; i < keys.length; i++) {
      if (numbers[keys[i]] % 2 !== 0 ) {
         return parseInt(keys[i]);
      }
  }
}
