Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse.
For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.

She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

Given a range of numbered days, [i...j] and a number k, determine the number of days in the range that are beautiful.
Beautiful numbers are defined as numbers where |i - reverse(i)| is evenly divisible by k.
If a days value is a beautiful number, it is a beautiful day. Print the number of beautiful days in the range.

Solution:

function beautifulDays(i, j, k) {
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step }, (_, i) => start + (i * step));
  const days = range(i, j+1, 1);
  const reversedNums = days.map(day => parseInt(day.toString().split("").reverse().join("")));
  let beautifulDays = 0;
  for (let i = 0; i < days.length; i++) {
    if (Math.abs(days[i] - reversedNums[i]) % k === 0) {
      beautifulDays += 1;
    }
  }
  return beautifulDays;
}
