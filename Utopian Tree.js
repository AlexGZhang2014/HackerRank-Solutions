The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. How tall will her tree be after n growth cycles?

For example, if the number of growth cycles is n = 5, the calculations are as follows:

Period  Height
0          1
1          2
2          3
3          6
4          7
5          14

Solution:

function utopianTree(n) {
  let initialHeight = 1;
  let currentHeight = initialHeight;
  let currentSeason = "spring";
  let currentCycle = 1;
  if (n < 1) {
    return initialHeight;
  }
  while (currentCycle <= n) {
    if (currentSeason === "spring") {
      currentHeight *= 2;
      currentSeason = "summer";
    } else {
      currentHeight += 1;
      currentSeason = "spring";
    }
    currentCycle += 1;
  }
  return currentHeight;
}
