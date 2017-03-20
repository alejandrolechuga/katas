/**
HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade.
For example,  will be rounded to  but  will not be rounded because the rounding would result in a number that is less than .

Given the initial value of  for each of Sam's  students, write code to automate the rounding process. For each , round it according to the rules above and print the result on a new line.

Input Format

The first line contains a single integer denoting  (the number of students). 
Each line  of the  subsequent lines contains a single integer, , denoting student 's grade.

Constraints

Output Format

For each  of the  grades, print the rounded grade on a new line.

Sample Input 0

4
73
67
38
33
Sample Output 0

75
67
40
33
Explanation 0

image

Student 1 received a 73 , and the next multiple of 5 from 73 is 75 . Since 75-73 < 3, the student's grade is rounded to 75 .
Student 2 received a 67, and the next multiple of 5 from 67 is 70 Since 70-67 = 3., the grade will not be modified and the student's final grade is 67.
Student 3 received a 38, and the next multiple of 5 from 38 is 40. Since  40-38 < 3, the student's grade will be rounded to 40.
Student 4 received a grade below 38, so the grade will not be modified and the student's final grade is 33.
*/
function roundGrade(grade) {
  var i = 0;
  var limit = 38;
  if ( grade >= limit ) {
    var reminder = grade % 5;
    if ( 5 - reminder < 3 ) {
      grade = grade + 5 - reminder;
    }
  }
  return grade;
}
