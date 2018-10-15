Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography.
During his last hike he took exactly n steps. For every step he took, he noted if it was an uphill, U, or a downhill, D step.
Garys hikes start and end at sea level and each step up or down represents a 1 unit change in altitude.

We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given Garys sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

For example, if Garys path is s = [D, D, U, U, U, U, D, D], he first enters a valley 2 units deep.
Then he climbs out an up onto a mountain 2 units high. Finally, he returns to sea level and ends his hike.

Solution:

function countingValleys(n, s) {
  let seaLevel = 0;
  let currentLevel = seaLevel;
  let steps = s.split('');
  let valleys = 0;
  for (const step of steps) {
    if (currentLevel === seaLevel) {
      if (step === 'D') {
        valleys += 1;
        currentLevel -= 1;
      } else {
        currentLevel += 1;
      }
    } else {
      if (step === 'D') {
        currentLevel -= 1;
      } else {
        currentLevel += 1;
      }
    }
  }
  return valleys;
}
