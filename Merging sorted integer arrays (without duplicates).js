/*
Merging sorted integer arrays (without duplicates)

DESCRIPTION:
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
SOLUTION: 
*/
function mergeArrays(a, b) {
  const mergedArray = [...a, ...b]; 
    const uniqueArray = Array.from(new Set(mergedArray));
    const sortedArray = uniqueArray.sort((a, b) => a - b);
    return sortedArray;
}
