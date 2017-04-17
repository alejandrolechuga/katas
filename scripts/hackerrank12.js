/**

Steve has a string, , consisting of  lowercase English alphabetic letters. In one operation, he can delete any pair of adjacent letters with same value. For example, string "aabcc" would become either "aab" or "bcc" after operation.

Steve wants to reduce  as much as possible. To do this, he will repeat the above operation as many times as it can be performed. Help Steve out by finding and printing 's non-reducible form!

Note: If the final string is empty, print Empty String .

Input Format

A single string, .

Constraints

Output Format

If the final string is empty, print Empty String; otherwise, print the final non-reducible string.

Sample Input 0

aaabccddd

Sample Output 0

abd

Sample Case 0

Steve can perform the following sequence of operations to get the final string:

aaabccddd → abccddd
abccddd → abddd
abddd → abd
Thus, we print abd.

Sample Input 1

baab
Sample Output 1

Empty String

Explanation 1

Steve can perform the following sequence of operations to get the final string:

baab → bb
bb → Empty String
Thus, we print Empty String.

Sample Input 2

aa
Sample Output 2

Empty String
Explanation 2

Steve can perform the following sequence of operations to get the final string:

aa → Empty String
Thus, we print Empty String.
*/

function reduceString(string) {
  var i = 0;
  var j = 1;
  while (j < string.length) {
    if (string[i] === string[j]) {
      string = string.substr(0, i) + string.substr(j + 1, string.length - 1);
      i = 0;
      j = 1;
    } else {
      i++;
      j++; 
    }
  }
  return string.length === 0 ? 'Empty String' : string;
}


function reduceString(string) {
  var i = 0;
  while (i + 1 < string.length) {
    if (string[i] === string[i + 1]) {
      string = string.substr(0, i) + string.substr(i + 2, string.length - 1);
      i = 0;
    } else {
      i++;
    }
  }
  return string.length === 0 ? 'Empty String' : string;
}
