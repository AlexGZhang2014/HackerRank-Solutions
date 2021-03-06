You are in charge of the cake for your nieces birthday and have decided the cake will have one candle for each year of her total age.
When she blows out the candles, she will only be able to blow out the tallest ones.
Your task is to find out how many candles she can successfully blow out.

For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 4, 4, 1, 3,
she will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles.

Solution:

function birthdayCakeCandles(ar) {
  let sortedAr = ar.sort((a, b) => a - b);
  const largestNum = ar[ar.length - 1];
  let filteredAr = sortedAr.filter(num => num === largestNum);
  return filteredAr.length;
}
