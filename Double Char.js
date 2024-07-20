/*
Double Char


DESCRIPTION:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

SOLUTION: 
*/
function doubleChar(str) {
  let result = '';

  for (const char of str) {
    result += char.repeat(2);
  }

  return result;
}
