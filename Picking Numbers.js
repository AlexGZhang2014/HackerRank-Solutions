Given an array of integers, find and print the maximum number of integers you can select from the array such that the absolute
difference between any two of the chosen integers is less than or equal to 1.
For example, if your array is a = [1, 1, 2, 2, 4, 4, 5, 5, 5], you can create two subarrays meeting the criterion:
[1, 1, 2, 2] and [4, 4, 5, 5, 5]. The maximum length subarray has 5 elements.

Solution:

function pickingNumbers(a) {
  let sorted = a.sort((a, b) => a - b);
  let uniqueSort = [...new Set(sorted)];
  let counts = [];
  for (const num of uniqueSort) {
    let nums = sorted.filter(x => x === num);
    counts.push(nums.length);
  }
  if (counts.length === 1) return sorted.length;
  let sum = 0;
  for (let i = 0; i < uniqueSort.length - 1; i++) {
    if (Math.abs(uniqueSort[i] - uniqueSort[i+1]) <= 1 && counts[i] + counts[i+1] > sum) {
      sum = counts[i] + counts[i+1];
    }
  }
  let sortedCounts = counts.sort((a, b) => b - a);
  if (sum > sortedCounts[0]) {
    return sum;
  } else {
    return sortedCounts[0];
  }
}
