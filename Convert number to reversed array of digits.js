/*
Convert number to reversed array of digits
DESCRIPTION:
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
SOLUTION: 
*/
function digitize(n) {
 let nString=n.toString();
  let digitArr=nString.split('');
  digitArr.reverse();
  let reversedDigitArr=digitArr.map((digit)=>parseInt(digit,10));
  return reversedDigitArr;
}
