/*
Sum Mixed Array


DESCRIPTION:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
SOLUTION: 
*/
unction sumMix(x){

return x.reduce((acc, curr) => 
 acc + Number(curr), 0)
}
