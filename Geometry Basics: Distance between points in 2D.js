/*
Geometry Basics: Distance between points in 2D

DESCRIPTION:
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Input coordinates fit in range 
−
50
⩽
𝑥
,
𝑦
⩽
50
−50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.
SOLUTION: 
*/
function distanceBetweenPoints(a, b) {
  const xDiff = a.x - b.x;
  const yDiff = a.y - b.y;
  const distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);
  return distance;
}
