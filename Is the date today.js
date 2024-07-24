/*
Is the date today

DESCRIPTION:
Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
SOLUTION: 
*/
function isToday(date) {
  const today = new Date();
  return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() &&  date.getDate() === today.getDate()
}
