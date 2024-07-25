/*
Find Nearest square number

DESCRIPTION:
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

Good luck :)

Check my other katas:

Alphabetically ordered

Case-sensitive!

Not prime numbers

Find your caterer
SOLUTION: 
*/
function nearestSq(n) {
  const sqrt = Math.sqrt(n);
  const floorSqrt = Math.floor(sqrt);
  const ceilSqrt = Math.ceil(sqrt);
  const lowerSquare = floorSqrt ** 2;
  const upperSquare = ceilSqrt ** 2;
  if (lowerSquare === n) {
    return n;
  }
  const distanceToLower = Math.abs(n - lowerSquare);
  const distanceToUpper = Math.abs(n - upperSquare);
  return distanceToLower <= distanceToUpper ? lowerSquare : upperSquare;
}
