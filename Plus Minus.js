Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros.
Print the decimal value of each fraction on a new line.

Sample Input

6
-4 3 -9 0 4 1         
Sample Output

0.500000
0.333333
0.166667

Solution:

function plusMinus(arr) {
  let positives = [];
  let negatives = [];
  let zeroes = [];
  for (const num of arr) {
    if (num > 0) {
      positives.push(num);
    } else if (num === 0) {
      zeroes.push(num);
    } else {
      negatives.push(num);
    }
  }
  console.log(positives.length/arr.length);
  console.log(negatives.length/arr.length);
  console.log(zeroes.length/arr.length);
}
