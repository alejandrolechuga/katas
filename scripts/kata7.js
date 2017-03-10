/**
Complete the solution, so that it returns the truncated version of the string followed by '...'.

solution('Testing String',3) // should return 'Tes...'
solution('Testing String',8) // should return 'Testing ...'
solution('Test',8) // should return 'Test'
*/

function solution(string,limit) {
  return limit < string.length ? string.substr(0,limit) + '...': string;
}
