/**
Given a square matrix of size NXN, calculate the absolute difference between the sums of its diagonals.

Input Format

The first line contains a single integer, . The next  lines denote the matrix's rows, with each line containing space-separated integers describing the columns.

Output Format

Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is: 
11
      5
            -12

Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:
            4
      5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19 
Difference: |4 - 19| = 15

**/
/**
* @param n {Number}
* @param m {Array[Array,Array.. N]}
*/
function sumDiagonals(n, m) {
  var diagonalA = 0;
  var diagonalB = 0;
  for (var i = 0, j = n - 1; i < n; i++, j--) {
      diagonalA += m[i][i];
      diagonalB += m[j][i];
  }
  return Math.abs(diagonalA - diagonalB);
}
