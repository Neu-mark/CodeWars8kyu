/*
Reversed Strings

DESCRIPTION:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
SOLUTION: 
*/
function solution(str){
  const strArr=str.split('');
  const reversedArr=strArr.reverse()
   const reversedStr=reversedArr.join('');
  return reversedStr
}
