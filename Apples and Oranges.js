See the problem here: "https://www.hackerrank.com/challenges/apple-and-orange/problem"

Solution:

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let houseApples = 0;
  let houseOranges = 0;
  for (let i = 0; i < apples.length; i++) {
    let distance = a + apples[i];
    if (distance >= s && distance <= t) {
      houseApples += 1;
    }
  }
  for (let j = 0; j < oranges.length; j++) {
    let distance = b + oranges[j];
    if (distance >= s && distance <= t) {
      houseOranges += 1;
    }
  }
  console.log(houseApples);
  console.log(houseOranges);
}
