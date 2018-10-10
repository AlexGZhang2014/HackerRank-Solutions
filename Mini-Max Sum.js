Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, arr = [1, 3, 5, 7, 9]. Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24.
We would print "16 24".

Solution:

function miniMaxSum(arr) {
  let sortedNumbers = arr.sort((a, b) => a - b);
  let minNumbers = sortedNumbers.slice(0, arr.length - 1);
  let maxNumbers = sortedNumbers.slice(1, arr.length);
  const minSum = minNumbers.reduce((a, b) => a + b);
  const maxSum = maxNumbers.reduce((a, b) => a + b);
  console.log(`${minSum} ${maxSum}`);
}
