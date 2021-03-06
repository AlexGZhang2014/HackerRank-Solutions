Dan is playing a video game in which his character competes in a hurdle race.
Hurdles are of varying heights, and Dan has a maximum height he can jump.
There is a magic potion he can take that will increase his maximum height by 1 unit for each dose.
How many doses of the potion must he take to be able to jump all of the hurdles.

Given an array of hurdle heights "height", and an initial maximum height Dan can jump, k,
determine the minimum number of doses Dan must take to be able to clear all the hurdles in the race.

For example, if height = [1, 2, 3, 3, 2] and Dan can jump 1 unit high naturally,
he must take 3 - 1 = 2 doses of potion to be able to jump all of the hurdles.

Solution:

function hurdleRace(k, height) {
  const sortedHeight = height.sort((a, b) => b - a);
  if (k >= sortedHeight[0]) {
    return 0;
  } else {
    return sortedHeight[0] - k;
  }
}
