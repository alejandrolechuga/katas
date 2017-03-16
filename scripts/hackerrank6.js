/**
Consider a staircase of size :

   #
  ##
 ###
####
Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Input Format

A single integer, , denoting the size of the staircase.

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .
**/

/**
* @param n{Number}number of stairs
*/
function buildStaircase(n) {
  var result = [];
  for (var i = 1; i <= n; i++) {
    result.push(repeatString(n - i, ' ') + repeatString(i, '#'));
  }
  
  function repeatString(n, string) {
    var repeat = [];
    repeat.length = n + 1;
    return repeat.join(string);
  }

  return result.join('\n');
}
