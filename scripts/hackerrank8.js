/**
Given a time in -hour AM/PM format, convert it to military (-hour) time.

Note: Midnight is  on a -hour clock, and  on a -hour clock. Noon is  on a -hour clock, and  on a -hour clock.

Input Format

A single string containing a time in -hour clock format (i.e.:  or ), where  and .

Output Format

Convert and print the given time in -hour format, where .

Sample Input

07:05:45PM

Sample Output

19:05:45

test cases 
12:05:39AM - 00:05:39
12:45:54PM - 12:45:54
12:00:00AM - 00:00:00
*/


function format24(time) {
  var pattern = /^(.*)\:(.*)\:(.*)(PM|AM)/;
  var match =  time.match(pattern);
  var meridiem;

  match = match && match.slice(1);
  meridiem = match[match.length - 1];
  match[0] = parseInt(match[0]) < 12 && meridiem === 'PM' ? parseInt(match[0]) + 12 : match[0];
  match[0] = parseInt(match[0]) === 12 && meridiem === 'AM' ? '00' : match[0];
  match[0] = parseInt(match[0]) === 12 && meridiem === 'PM' ? '12' : match[0];
  return match.slice(0, match.length - 1).join(':');
}
