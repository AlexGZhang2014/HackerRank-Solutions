// Not on HackerRank, but put here for reference

// Get the nth Fibonacchi series number

Solution:

function getNthFib(n) {
  let prevFib = 0;
  let fib = 1;
  let index = 2;
  if (n === 1) {
    return 0;
  }
  while (index < n) {
    let nextFib = prevFib + fib;
    prevFib = fib;
    fib = nextFib;
    index++
  }
  return fib;
}
