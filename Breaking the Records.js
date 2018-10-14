Maria plays college basketball and wants to go pro. Each season she maintains a record of her play.
She tabulates the number of times she breaks her season record for most points and least points in a game.
Points scored in the first game establish her record for the season, and she begins counting from there.

For example, assume her scores for the season are represented in the array scores = [12, 24, 10, 24].
Scores are in the same order as the games played. She would tabulate her results as follows:

                                 Count
Game  Score  Minimum  Maximum   Min Max
 0      12     12       12       0   0
 1      24     12       24       0   1
 2      10     10       24       1   1
 3      24     10       24       1   1
 
Given Marias scores for a season, find and print the number of times she breaks her records for most and least points scored during the season.
The function must return an integer array containing the numbers of times she broke her records.
Index 0 is for breaking most points records, and index 1 is for breaking least points records.

Solution:

function breakingRecords(scores) {
  let highCount = 0;
  let lowCount = 0;
  let highScore = scores[0];
  let lowScore = scores[0];
  for (const score of scores) {
    if (score > highScore) {
      highScore = score;
      highCount += 1;
    } else if (score < lowScore) {
      lowScore = score;
      lowCount += 1;
    }
  }
  return [highCount, lowCount];
}
