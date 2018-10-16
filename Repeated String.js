Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.

Given an integer, n, find and print the number of letter "a" in the first n letters of Lilahs infinite string.

For example, if the string s = 'abcac' and n = 10, the substring we consider is 'abcacabcac', the first n characters of her infinite string.
There are 4 occurrences of 'a' in the substring.

Solution:

function repeatedString(s, n) {
  const numberOfA = s.split('').filter(x => x === 'a').length;
  const numberOfS = Math.floor(n/s.length);
  let totalA = numberOfA * numberOfS;
  const remainder = n % s.length;
  const remainingA = s.split('').slice(0, remainder).filter(x => x === 'a').length;
  return totalA + remainingA;
}
