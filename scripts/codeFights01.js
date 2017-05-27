/*Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

Input/Output

[time limit] 4000ms (js)
[input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

[output] integer

The largest product of adjacent elements.*/

function adjacentElementsProduct(a) {
    var lastLarge = a[0] * a[1];
    for (var i  = 1, j = 2; j < a.length; i++, j++) {
        if ((a[i] * a[j]) > lastLarge ) {
            lastLarge = a[i] * a[j];
        }
    }
    return lastLarge;
}
