An integer d is a divisor of an integer n if the remainder of n / d = 0.

Given an integer, for each digit that makes up the integer determine whether it is a divisor.
Count the number of divisors occurring within the integer.

Note: Each digit is considered to be unique, so each occurrence of the same digit should be counted
(e.g. for n = 111, 1 is a divisor of 111 each time it occurs so the answer is 3).

Solution:

function findDigits(n) {
  let divisors = 0;
  const arrayDigits = n.toString().split('');
  for (const digit of arrayDigits) {
    let num = parseInt(digit);
    if (n % num === 0) {
      divisors++;
    }
  }
  return divisors;
}
